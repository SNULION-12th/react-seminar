import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  /* TODO: props 받기
       Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */
  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */
  const [editState, setEditState] = useState(false);
  const [curComment, setCurComment] = useState(comment.content);
  const [newComment, setNewComment] = useState("");
  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    setEditState(true); // add api call for editing comment
  };

  const handleCommitComment = () => {
    setEditState(false);
    setCurComment(newComment);
    setNewComment(""); // add api call for editing comment
  };

  useEffect(() => {
    // add api call to check if user is the author of the comment
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {editState === true ? (
          <input
            className="text-black"
            type="text"
            defaultValue={curComment.comment}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        ) : (
          <p className="text-base">{curComment}</p>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {editState ? (
          <div>
            <button className="button" onClick={() => setEditState(false)}>
              취소
            </button>
            <button className="button" onClick={handleCommitComment}>
              완료
            </button>
          </div>
        ) : (
          <div>
            <button className="button" onClick={handleEditComment}>
              수정
            </button>
            <button
              className="button"
              onClick={() => handleCommentDelete(comment)}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
