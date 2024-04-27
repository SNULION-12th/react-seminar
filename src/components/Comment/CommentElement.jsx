import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(comment.content);

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

  useEffect(() => {
    // add api call to check if user is the author of the comment
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {editing ? (
          <input
            className="bg-black border-2 border-orange-400 rounded-2xl"
            defaultValue={edited}
            onChange={(e) => setEdited(e.target.value)}
          ></input>
        ) : (
          <p>{edited}</p>
        )}

        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {editing ? (
          <>
            <button
              onClick={() => {
                setEdited(comment.content);
                setEditing(false);
              }}
            >
              취소
            </button>
            <button
              onClick={() => {
                handleEditComment();
                setEditing(false);
              }}
            >
              완료
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                handleCommentDelete(comment.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                setEditing(true);
              }}
            >
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
