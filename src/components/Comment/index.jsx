import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";
import React from "react";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [commentList, setCommentList] = useState(comments);
  const [newCommentValue, setNewCommentValue] = useState("");

  // API 명세에 맞춰 console에 찍어보기 연습
  console.log(postId); // Query Parameter
  //

  const handleChange = (e) => {
    console.log(e);
    setNewCommentValue(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    // API 명세에 맞춰 console에 찍어보기 연습
    console.log({
      post: 2,
      content: "과제 파이팅!",
    }); // Body
    //
    e.preventDefault();
    alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?

    const newComment = {
      id: commentList.length,
      content: newCommentValue,
      created_at: `${new Date().toISOString()}`,
      post: postId,
      author: {},
    };

    setCommentList([...commentList, newComment]);
    setNewCommentValue("");
  };

  const handleCommentDelete = (commentId) => {
    // API 명세에 맞춰 console에 찍어보기 연습
    console.log(postId); // Query Parameter
    console.log({
      comment: 1,
    }); // Body
    //
    alert("댓글 삭제"); // add api call for deleting comment
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      <div>
        {commentList.map((comment) => (
          <CommentElement
            comment={comment}
            handleCommentDelete={handleCommentDelete}
          />
        ))}
      </div>
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-row items-center justify-center mt-10 gap-2"
      >
        <input
          className="input"
          required
          type="text"
          placeholder="댓글을 입력해주세요"
          value={newCommentValue}
          onChange={handleChange}
        ></input>
        <button type="submit" className="button w-28">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
