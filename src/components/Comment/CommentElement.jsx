import React, { useState } from "react";

const CommentElement = ({
  id,
  content,
  createdAt,
  handleCommentDelete,
  handleCommentEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const date = new Date(createdAt);
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
    <div className="w-full mb-5">
      <div className="flex justify-between items-center">
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

        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="text-red-500 mx-1 p-2"
            >
              취소
            </button>
            <button onClick={handleEditComment} className="text-white mx-1 p-2">
              완료
            </button>
          </>
        ) : (
          <div>
            <button
              onClick={() => setIsEditing(true)}
              className="text-white mx-1 p-2"
            >
              수정
            </button>
            <button
              onClick={() => handleCommentDelete(id)}
              className="text-white mx-1 p-2"
            >
              삭제
            </button>
          </div>
        )}
      </div>
      <div className="text-gray-300 text-sm mt-2">
        {year}.{month}.{day}
      </div>
    </div>
  );
};

export default CommentElement;
