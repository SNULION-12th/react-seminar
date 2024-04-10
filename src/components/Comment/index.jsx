import { useState, useEffect } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState({
    id: Math.max(commentList.map((comment) => comment.id)),
    content: "",
    created_at: "2024-01-01T15:09:43Z",
    post: postId,
    author: {
      id: 123,
      username: "어쩌구",
    },
  });

  const handleCommentChange = (e) => {
    setNewComment({
      ...newComment,
      content: e.target.value,
    });
  };

  const editOriginalComment = (commentId, editedText) => {
    const updatedComments = commentList.map((comment) => {
      if (comment.id == commentId) {
        return { ...comment, content: editedText };
      }
      return comment;
    });
    setCommentList(updatedComments);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentList = [...commentList, newComment];
    setCommentList(newCommentList);
    alert("댓글 작성"); // add api call for creating comment
    console.log(newComment);
    setNewComment({
      id: Math.floor(Math.random() * 100000),
      content: "",
      created_at: "2024-01-01T15:09:43Z",
      post: postId,
      author: {
        id: 123,
        username: "어쩌구",
      },
    });
  };

  const handleCommentDelete = (commentId) => {
    const newCommentList = commentList.filter(
      (comment) => comment.id !== commentId
    );
    setCommentList(newCommentList);
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => (
        <CommentElement
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          editOriginalComment={editOriginalComment}
        />
      ))}
      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <input
          required
          type="text"
          placeholder="댓글을 입력해주세요"
          value={newComment.content}
          onChange={handleCommentChange}
          className="input"
        />
        <button type="submit" className="button flex-none">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
