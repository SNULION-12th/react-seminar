import { useState, useEffect } from "react";

const CommentElement = ({
  comment,
  handleCommentDelete,
  handleCommentEdit,
}) => {
  const [editedContent, setEditedContent] = useState(comment.content);
  const [isEdit, setIsEdit] = useState(false);

  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    alert("댓글 수정");
    setIsEdit(false);
    handleCommentEdit(comment.id, editedContent);
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {isEdit ? (
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="input"
          />
        ) : (
          <p>{comment.content}</p>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isEdit ? (
          <div>
            <button className="p=2" onClick={() => setIsEdit(false)}>
              취소
            </button>
            <button className="p=2" onClick={handleEditComment}>
              완료
            </button>
          </div>
        ) : (
          <div>
            <button
              className="p-2"
              onClick={() => handleCommentDelete(comment.id)}
            >
              삭제
            </button>
            <button className="p-2" onClick={() => setIsEdit(true)}>
              수정
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
