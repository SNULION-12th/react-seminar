import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
  /* TODO: props 받기
     Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */

  const [isEditting, setIsEditting] = useState(false);
  const [editComment, setEditComment] = useState(comment.content);
  const [postComment, setPostComment] = useState(comment.content);
  // Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */

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
        {isEditting ? (
          <input
            className="bg-black border-2 border-orange-400 outline-none rounded-2xl py-2 px-2 text-white"
            defaultValue={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          ></input>
        ) : (
          <span>{postComment}</span>
        )}
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {isEditting ? (
          <>
            <button onClick={() => setIsEditting(false)}>취소</button>
            <button
              onClick={() => {
                handleEditComment();
                setPostComment(editComment);
                setIsEditting(false);
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
                setIsEditting(true);
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
