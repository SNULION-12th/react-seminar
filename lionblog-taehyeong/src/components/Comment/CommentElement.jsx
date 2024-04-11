import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState(comment.content);
  const [editInputValue, setEditInputValue] = useState("");

  // comment created_at 전처리
  const date = new Intl.DateTimeFormat("en-CA", {
    formatString: "yyyy.mm.dd",

    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(comment.created_at))
    .replaceAll("-", ".");

  const handleEditComment = (e) => {
    e.preventDefault();
    setContent(editInputValue);
    setIsEditMode(false);
    setEditInputValue("");
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
          <input
            className="input"
            defaultValue={content}
            onChange={(e) => setEditInputValue(e.target.value)}
          />
        ) : (
          <p>{content}</p>
        )}

        <span className="text-base text-gray-300">{date}</span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isEditMode ? (
          <>
            <button className="button-no-bg" onClick={toShowMode}>
              취소
            </button>
            <button className="button-no-bg" onClick={handleEditComment}>
              완료{" "}
            </button>
          </>
        ) : (
          <>
            <button
              className="button-no-bg"
              type="button"
              onClick={handleCommentDelete(comment.id)}
            >
              삭제
            </button>
            <button className="button-no-bg" type="button" onClick={toEditMode}>
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default CommentElement;
