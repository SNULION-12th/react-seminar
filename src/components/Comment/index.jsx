import React, { useState } from "react";
import commentsData from "../../data/comments";
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // 댓글들을 저장하기 위한 state
  const [comments, setComments] = useState(commentsData);
  // 새로운 댓글을 추가하기 위한 state
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // 현재 날짜와 시간을 포함하는 새 댓글 객체 생성
    const now = new Date();
    const createdAt = now.toISOString().split("T")[0];

    const commentToAdd = {
      id: comments.length + 1,
      content: newComment,
      created_at: createdAt,
      author: { id: "1", username: "currentUser" },
    };
    setComments([...comments, commentToAdd]);
    setNewComment("");
    alert("댓글 작성");
  };

  const handleCommentEdit = (id, editedContent) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: editedContent };
        }
        return comment;
      })
    );
  };

  const handleCommentDelete = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
    alert("댓글 삭제");
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {comments.map((comment) => (
        <CommentElement
          key={comment.id}
          id={comment.id}
          content={comment.content}
          createdAt={comment.created_at}
          postId={comment.post}
          author={comment.author}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
        />
      ))}

      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <div className="flex w-full gap-2">
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border p-2 rounded flex-grow text-black"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white p-2 rounded"
          >
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
