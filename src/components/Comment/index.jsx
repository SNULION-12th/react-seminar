import { useState, useEffect } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  const [commentList, setCommentList] = useState(comments);
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newText = {
      id: commentList.length + 1,
      post: postId,
      content: newComment,
      created_at: new Date().toISOString(),
      author: {
        id: commentList.length + 1,
        username: "likelion",
      },
    };
    alert("댓글 작성"); // add api call for creating comment
    setCommentList([...commentList, newText]);
    setNewComment("");
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
    alert("댓글 삭제");
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => (
        <CommentElement
          key={comment.id}
          comment={comment}
          postId={postId}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-row items-center justify-center mt-10 gap-2"
      >
        <div className="flex w-full">
          <input
            className="input"
            type="text"
            value={newComment}
            placeholder="댓글을 입력해주세요"
            onChange={(e) => setNewComment(e.target.value)}
          ></input>
          <button type="submit" className="button ml-3 w-24">
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
