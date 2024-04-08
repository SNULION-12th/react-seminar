import { useState, useEffect } from "react";

const CommentElement = (props) => {
  /* TODO: props 받기
       Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */
  const comment = "";
  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */

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
        {/* // TODO: 수정 중일 때와 아닐 때를 나눠서 보여줘야 해요! */}
        {/* {수정 중 ? <input ... /> : <p ...>댓글 내용</p>} */}
        // 날짜
        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        // TODO: 버튼 (수정 중인 경우와 아닌 경우 나타나는 버튼이 달라요!)
        {/* {수정 중 ? 취소, 완료 버튼 : 수정, 삭제 버튼} */}
      </div>
    </div>
  );
};
export default CommentElement;
