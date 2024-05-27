import { useState, useEffect } from "react";
import { getComments, createComment, deleteComment } from "../../apis/api";
import CommentElement from "./CommentElement";

const Comment = ({ postId, user }) => {
  const [commentList, setCommentList] = useState([]); // state for comments
  const [newContent, setNewContent] = useState(""); // state for new comment

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const createCommentAPI = async (data) => {
      await createComment(data);
      return;
    };
    createCommentAPI({
      post: postId,
      content: newContent,
    });
    setNewContent("");
  };

  const handleCommentDelete = (commentId) => {
    if (window.confirm("정말로 댓글을 삭제하시겠습니까?")) {
      const deleteCommentAPI = async (commentId) => {
        await deleteComment(commentId);
        return;
      };
      deleteCommentAPI(commentId);
    }
  };

  useEffect(() => {
    const getCommentAPI = async (postId) => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    getCommentAPI(postId);
  }, [postId]);

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
