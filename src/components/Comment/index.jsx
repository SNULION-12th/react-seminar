import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  const [commentList, setCommentList] = useState(comments);
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [newComment, setNewComment] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObject = {
      id: commentList.length + 1,
      content: newComment,
      created_at: Date(),
    };
    setCommentList([...commentList, newCommentObject]);
    setNewComment("");
    alert("댓글 작성"); // add api call for creating comment
  };

  const handleCommentDelete = (commentId) => {
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
    alert("댓글 삭제"); // add api call for deleting comment
  };

  const handleCommentEdit = (commentId, editedComment) => {
    setCommentList((commentList) => {
      return commentList.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, content: editedComment };
        }
        return comment;
      });
    });
    alert("댓글 수정");
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => (
        <CommentElement
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
        />
      ))}
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-row items-center justify-center mt-10 gap-2"
      >
        <input
          required
          className="input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        <button type="submit" className="button w-24 h-12 py-10">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
