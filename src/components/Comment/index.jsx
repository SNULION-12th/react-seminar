import { useState, useEffect } from "react";
import comments from "../../data/comments";
import { getComments, createComment, deleteComment } from "../../apis/api";
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]); // state for comments
  const [newContent, setNewContent] = useState(""); // state for new comment

  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    console.log("get comment success");
    getCommentsAPI();
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    createComment({
      post: postId,
      content: newContent,
    }); //api.js에서 data에 해당하는부분은 {} 배열로 주어져야함.
    console.log({
      post: postId,
      content: newContent,
    });
    setNewContent("");
  };

  const handleCommentDelete = (commentId) => {
    deleteComment(commentId); // TODO: add api call for deleting comment
  };
  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => {
        return (
          <CommentElement
            key={comment.id}
            comment={comment}
            handleCommentDelete={handleCommentDelete}
            postId={postId}
          />
        );
      })}

      <form
        className="flex flex-row mt-10 gap-3"
        onSubmit={handleCommentSubmit}
      >
        <input
          type="text"
          value={newContent}
          placeholder="댓글을 입력해주세요"
          className="input"
          style={{ width: "calc(100% - 100px)" }}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" className="button">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
