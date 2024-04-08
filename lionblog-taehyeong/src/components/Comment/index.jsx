import { useState, useEffect } from "react";
import comments from "../../data/comment"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [commentInputValue, setCommentInputValue] = useState("");
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요

  const handleCommentInputChange = (e) => {
    const { value } = e.target;
    setCommentInputValue(value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInputValue.length === 0) return;

    const sortedData = commentsData.sort((a, b) => a.id - b.id);
    const newId = sortedData[sortedData.length - 1].id + 1;
    setCommentsData([
      ...commentsData,
      {
        id: newId,
        content: commentInputValue,
        created_at: "2024-01-01T15:09:43Z",
        post: 1,
        author: {
          id: 2,
          username: "user2",
        },
      },
    ]);
    alert("댓글 작성"); // add api call for creating comment

    setCommentInputValue("");
  };

  const handleCommentDelete = (commentId) => (e) => {
    e.preventDefault();
    const updatedComments = commentsData.filter(
      (comment) => comment.id !== commentId
    );
    setCommentsData([...updatedComments]);
    alert("댓글 삭제"); // add api call for deleting comment
  };

  useEffect(() => {
    setCommentsData(comments);
  }, []);

  return (
    <div className="w-full mt-5 self-start mb-8">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentsData &&
        commentsData.map((comment) => (
          <CommentElement
            key={commentsData.id}
            comment={comment}
            handleCommentDelete={handleCommentDelete}
          />
        ))}
      <form className="flex flex-row items-center justify-center mt-10 gap-2">
        <input
          type="text"
          className="input"
          placeholder="댓글을 입력해주세요."
          onChange={handleCommentInputChange}
          value={commentInputValue}
        />
        <button className="button" type="submit" onClick={handleCommentSubmit}>
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
