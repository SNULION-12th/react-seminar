import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newContent, setNewContent] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert("댓글 작성");
    const newComment = {
      id: commentList.id + 1,
      content: newContent,
      created_at: Date.now(),
      post: postId,
      author: {},
    };

    setCommentList([...commentList, newComment]);
    setNewContent("");
  };

  const handleCommentEdit = (id, editedContent) =>
    setCommentList(
      commentList.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: editedContent };
        }
        return comment;
      })
    );

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
    alert("댓글 삭제");
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => {
        return (
          <CommentElement
            comment={comment}
            handleCommentEdit={handleCommentEdit}
            handleCommentDelete={handleCommentDelete}
          />
        );
      })}

      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          className="input"
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" className="h-14 button whitespace-nowrap">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
