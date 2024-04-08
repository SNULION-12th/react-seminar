import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */
  const [commentEditInput, setcommentEditInput] = useState("");
  const [onEdit, setonEdit] = useState(false);

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    alert("댓글 수정"); // add api call for editing comment
    setonEdit(!onEdit);
  };

  useEffect(() => {
    // add api call to check if user is the author of the comment
    console.log(comment.content);
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {/* // TODO: 수정 중일 때와 아닐 때를 나눠서 보여줘야 해요! */}
        {onEdit ? (
          <input
            type="text"
            className="input"
            value={commentEditInput}
            onChange={(e) => {
              setcommentEditInput(e.target.value);
            }}
          />
        ) : (
          <p>{comment.content}</p>
        )}
        {/* // 날짜 */}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {/* // TODO: 버튼 (수정 중인 경우와 아닌 경우 나타나는 버튼이 달라요!) */}
        {onEdit ? (
          <div className="pb-6">
            <button
              className="mr-2"
              onClick={() => {
                setonEdit(!onEdit);
              }}
            >
              취소
            </button>
            <button
              onClick={() => {
                setonEdit(!onEdit);
              }}
            >
              완료
            </button>
          </div>
        ) : (
          <div>
            <button
              className="mr-2"
              onClick={() => {
                handleCommentDelete(comment.id);
              }}
            >
              삭제
            </button>
            <button onClick={handleEditComment}>수정</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
