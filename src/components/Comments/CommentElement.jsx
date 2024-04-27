import { useState } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  const [editing, setEditing] = useState(false);
  const [currentComment, setCurrentComment] = useState(comment.content);
  const [newComment, setNewComment] = useState(comment.content);

  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEdit = () => {
    setEditing(true);
  };

  const handleConfirmEdit = () => {
    setEditing(false);
    setCurrentComment(newComment);
    setNewComment("");
    alert("댓글 수정");
  };

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {editing ? (
          <input
            className="text-black"
            type="text"
            defaultValue={currentComment.content}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        ) : (
          <p>{currentComment}</p>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>
      <div>
        {editing ? (
          <button onClick={handleConfirmEdit}>확인</button>
        ) : (
          <div className="flex flex-row items-center gap-3">
            <button onClick={handleEdit}>수정</button>
            <button onClick={() => handleCommentDelete(comment)}>삭제</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentElement;
