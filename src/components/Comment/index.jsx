import { useState, useEffect } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";
import { getComments, createComment, deleteComment } from "../../apis/api";
import { getCookie } from "../../utils/cookie";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    getCommentsAPI();
  }, [postId]);

  const [newContent, setNewContent] = useState({
    post: postId,
    content: "",
  });

  const handleChange = (e) => {
    setNewContent({ ...newContent, content: e.target.value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    createComment(newContent);
  };

  const handleCommentDelete = (commentId) => {
    deleteComment(commentId);
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

      {getCookie("access_token") ? (
        <form
          className="flex flex-row mt-10 gap-3"
          onSubmit={handleCommentSubmit}
        >
          <input
            type="text"
            value={newContent.content}
            placeholder="댓글을 입력해주세요"
            className="input"
            style={{ width: "calc(100% - 100px)" }}
            onChange={handleChange}
          />
          <button type="submit" className="button">
            작성
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Comment;
