import { useState } from "react";
import commentsData from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("댓글 작성"); // add api call for creating comment

    const now = new Date();
    const date_st = now.toISOString().split("T")[0];

    const newcomment = {
      id: comments.length + 1,
      content: newComment,
      created_at: date_st,
      post: postId,
      author: {},
    };

    setComments([...comments, newcomment]);
    setNewComment("");
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
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment

    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {comments.map((comment) => (
        <CommentElement
          key={comment.id}
          id={comment.id}
          content={comment.content}
          date_st={comment.created_at}
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
