import { useState, useEffect } from "react";

const CommentElement = ({
  commentId,
  comment,
  handleCommentDelete,
  editOriginalComment,
}) => {
  /* TODO: props 받기
       Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */

  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */
  const [isModifying, setIsModifying] = useState(false);
  const [commentContent, setCommentContent] = useState(comment.content);

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleChangeComment = (e) => {
    setCommentContent(e.target.value);
  };

  const handleEditComment = () => {
    editOriginalComment(comment.id, commentContent);
    setIsModifying(false);
    alert("댓글 수정"); // add api call for editing comment
  };

  useEffect(() => {
    // add api call to check if user is the author of the comment
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {isModifying ? (
          <input
            className="p-2 bg-black ring-2 ring-white hover:ring-orange-300 rounded-xl w-[80%]"
            value={commentContent}
            onChange={handleChangeComment}
          />
        ) : (
          <p>{comment.content}</p>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isModifying ? (
          <>
            <button
              className="small-button"
              onClick={() => {
                setCommentContent(comment.content);
                setIsModifying(false);
              }}
            >
              취소
            </button>
            <button className="small-button" onClick={handleEditComment}>
              완료
            </button>
          </>
        ) : (
          <>
            <button
              className="small-button"
              onClick={() => {
                handleCommentDelete(comment.id);
              }}
            >
              삭제
            </button>
            <button
              className="small-button"
              onClick={() => {
                setIsModifying(true);
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
