import { useEffect, useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [newComment, setNewComment] = useState(null);
  const [commentList, setCommentList] = useState(comments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentObj = {
      id: commentList.length + 1,
      content: newComment,
      created_at: new Date().toISOString(), // add api call for creating comment
      // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
    };
    setCommentList([...commentList, newCommentObj]);
    setNewComment("");
  };

  const handleCommentDelete = (commentToDelete) => {
    const updatedComments = commentList.filter(
      (comment) => comment.id !== commentToDelete.id
    );
    setCommentList(updatedComments);
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((com) => (
        <CommentElement
          key={com.id}
          comment={com}
          handleCommentDelete={handleCommentDelete}
        />
      ))}

      <form className="flex flex-row items-center justify-center mt-10 gap-2">
        <input
          className="text-black"
          type="text"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        ></input>
        <button onClick={handleCommentSubmit}>작성</button>
      </form>
    </div>
  );
};

export default Comment;
