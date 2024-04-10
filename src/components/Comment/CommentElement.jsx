import { useState, useEffect } from "react";

const CommentElement = ({
  comment,
  handleCommentDelete,
  editOriginalComment,
}) => {
  const [changeInputValue, setChangeInputValue] = useState(comment.content);
  const [isChange, setIsChange] = useState(false);

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = (e) => {
    e.preventDefault();
    editOriginalComment(comment.id, changeInputValue);
    setIsChange(false);
    alert("댓글 수정"); // add api call for editing comment
  };

  const handleNotEditComment = () => {
    setIsChange(false);
    setChangeInputValue(comment.content);
  };

  useEffect(() => {
    // add api call to check if user is the author of the comment
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {isChange ? (
          <input
            type="text"
            value={changeInputValue}
            onChange={(e) => {
              setChangeInputValue(e.target.value);
            }}
            className="text-black input	"
          />
        ) : (
          <p className="text-base text-gray-300">{comment.content}</p>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        <form onSubmit={handleEditComment}>
          {isChange ? (
            <>
              <button onClick={handleNotEditComment} className="mr-3">
                취소
              </button>
              <button type="submit">완료</button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsChange(true);
                }}
                className="mr-3"
              >
                수정
              </button>
              <button
                type="button"
                onClick={() => handleCommentDelete(comment.id)}
              >
                삭제
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
export default CommentElement;
