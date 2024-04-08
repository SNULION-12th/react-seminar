import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentsarr, setcommentsarr] = useState(comments);
  const [commentInput, setcommentInput] = useState("");
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("댓글 작성"); // add api call for creating comment
    setcommentInput("");
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-[50%] relative block group font-medium">
      <h1 className="text-3xl font-bold my-5 ">Comments</h1>
      {commentsarr.map((comment) => (
        <CommentElement
          key={comment.id}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-row items-center justify-center mt-10 gap-2"
      >
        <div className="flex w-full h-12">
          <input
            className="input"
            type="text"
            placeholder="댓글을 입력해주세요"
            value={commentInput}
            onChange={(e) => {
              setcommentInput(e.target.value);
            }}
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
