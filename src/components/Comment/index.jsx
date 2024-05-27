import { useEffect, useState } from "react";
//import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";
import { getComments, createComment, deleteComment } from "../../apis/api";
import { getCookie } from "../../utils/cookie";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]); // state for comments
  const [comment, setComment] = useState({
    post: postId,
    content: "",
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // 로그인 여부 상태, 우선 false로 초기화

  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    getCommentsAPI();

    // 로그인 여부 확인
    const loggedIn = getCookie("access_token") ? true : false;
    setIsUserLoggedIn(loggedIn);
  }, []);

  const handleChange = (e) => {
    setComment({ ...comment, content: e.target.value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    createComment(comment);
  };

  const handleCommentDelete = (commentId) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      deleteComment(commentId);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
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

      {isUserLoggedIn ? (
        <form
          className="flex flex-row mt-10 gap-3"
          onSubmit={handleCommentSubmit}
        >
          <input
            type="text"
            value={comment.content}
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
