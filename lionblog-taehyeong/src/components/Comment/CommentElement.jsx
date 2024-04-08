import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    alert("댓글 수정"); // add api call for editing comment
  };

  const toEditMode = (e) => {
    e.preventDefault();
    setIsEditMode(true);
  };

  const toShowMode = (e) => {
    e.preventDefault();
    setIsEditMode(false);
  };

  useEffect(() => {
    // add api call to check if user is the author of the comment
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {isEditMode ? (
          <input className="input" defaultValue={comment.content} />
        ) : (
          <p>{comment.content}</p>
        )}

        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isEditMode ? (
          <>
            <button className="button" onClick={toShowMode}>
              취소
            </button>
            <button className="button">완료 </button>
          </>
        ) : (
          <>
            <button
              className="button"
              type="button"
              onClick={handleCommentDelete(comment.id)}
            >
              삭제
            </button>
            <button className="button" type="button" onClick={toEditMode}>
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
