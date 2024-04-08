import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>

      <form className="flex flex-row items-center justify-center mt-10 gap-2"></form>
    </div>
  );
};

export default Comment;
