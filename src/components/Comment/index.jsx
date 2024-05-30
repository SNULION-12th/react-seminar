import { useState, useEffect } from "react";
import CommentElement from "./CommentElement";
import {
  createComment,
  getComments,
  getUser,
  deleteComment,
} from "../../apis/api";
import { getCookie } from "../../utils/cookie";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]); // state for comments
  const [newContent, setNewContent] = useState(""); // state for new comment
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    getCommentsAPI();
    const loggedIn = getCookie("access_token") ? true : false;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault(); // event 가져올 때 기존의 빈 요청이 보내지는 것을 막는 ? 용도
    createComment({
      content: newContent,
      post: postId,
    });
    setNewContent(""); // 댓글 submit시 댓글을 비워주는 애
  };

  const handleCommentDelete = async (commentId) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      await deleteComment(commentId);
    } catch (error) {
      console.error(error);
    }
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
