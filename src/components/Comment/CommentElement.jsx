import { useState, useEffect } from "react";

const CommentElement = ({
  id,
  content,
  date_st,
  handleCommentDelete,
  handleCommentEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  // comment created_at 전처리
  const date = new Date(date_st);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    if (editedContent.trim() !== "") {
      handleCommentEdit(id, editedContent);
      setIsEditing(false);
      alert("댓글 수정 완료");
    } else {
      alert("댓글 내용을 입력해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {isEditing ? (
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="flex-grow border p-2 rounded mr-2 text-black"
          />
        ) : (
          <div className="flex-grow">
            <p className="text-white">{content}</p>
          </div>
        )}

        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isEditing ? (
          <>
            <button
              onClick={() => {
                setIsEditing(false);
              }}
            >
              취소
            </button>
            <button onClick={handleEditComment}>완료</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                handleCommentDelete(id);
              }}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
