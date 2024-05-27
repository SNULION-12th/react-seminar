import { useState, useEffect } from "react";
import CommentElement from "./CommentElement";
import { createComment, getComments } from "../../apis/api";
import { getCookie } from "../../utils/cookie";

const Comment = ({
  postId,
  comments,
  handleCommentDelete,
  handleCommentEdit,
}) => {
  const [commentList, setCommentList] = useState(comments);
  const [newContent, setNewContent] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 여부 확인
    if (getCookie("access_token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const newComment = {
        content: newContent,
        post: postId,
      };
      await createComment(newComment);
      setNewContent("");
      const updatedComments = await getComments(postId); // 새 댓글 목록을 가져옴
      setCommentList(updatedComments); // 상태 업데이트
    } catch (error) {
      console.error("[ERROR] error while creating comment", error);
    }
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => (
        <CommentElement
          key={comment.id}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
          postId={postId}
        />
      ))}

      {isLoggedIn && (
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
      )}
    </div>
  );
};

export default Comment;
