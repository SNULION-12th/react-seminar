import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState({
    id: 1,
    content: "새해 복 많이 받으세요^^",
    created_at: "2024-01-01T15:09:43Z",
    post: 1,
    author: {
      id: 2,
      username: "user2",
    },
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("댓글 작성"); // add api call for creating comment
    const newCommentFinal = {
      id: commentList.length + 1,
    content: newComment,
    created_at: Date(),
    post: postId,
    author: {
      id: 0,
      username: "0",
    },
  }
    
    setCommentList([...commentList, newCommentFinal]);
    setNewComment("");
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => (
        <CommentElement
          comment={comment}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <input
          required
          className="input"
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
        ></input>
        <button type="submit" className="button">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
