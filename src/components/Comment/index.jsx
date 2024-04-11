import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState(comments);
  const [commentInputValue, setCommentInputValue] = useState("");
  const [newId, setNewId] = useState(4);
  const [newComment, setNewComment] = useState({
    id: newId,
    content: "",
    created_at: "2024-01-01T15:09:43Z",
    post: 1,
    author: { id: comments.length, username: "user" + comments.length },
  });

  const handleNewComment = (e) => {
    setCommentInputValue(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const addedComment = {
      ...newComment,
      id: newId,
      content: commentInputValue,
      created_at: Date.now(),
    };
    setCommentList([...commentList, addedComment]);
    setNewId(newId + 1);
    alert("댓글 작성"); // add api call for creating comment
    setCommentInputValue("");
  };

  const handleCommentEdit = (commentId, editedText) => {
    const editedList = commentList.map((commentPiece) => {
      if (commentId === commentPiece.id) {
        console.log("Hello");
        return { ...commentPiece, content: editedText };
      } else {
        return commentPiece;
      }
    });
    setCommentList(editedList);
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    setCommentList(
      commentList.filter((commentPiece) => commentId !== commentPiece.id)
    );
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {/*commentList의 요소들을 한 개씩 commentElement라는 포장지로 감싸는 과정*/}
      {commentList.map((singleComment) => (
        <CommentElement
          commnetId={singleComment.id}
          comment={singleComment}
          handleCommentDelete={handleCommentDelete}
          handleEditComment={handleCommentEdit}
        />
      ))}
      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        id="newComment"
      >
        <div className="flex  w-full gap-x-5 h-11">
          <input
            type="text"
            placeholder="댓글을 입력해주세요"
            id="newComment"
            value={commentInputValue}
            className="input grow"
            onChange={handleNewComment}
          />
          <button
            type="button"
            className="button py-2 px-2"
            style={{ whiteSpace: "nowrap" }}
            onClick={handleCommentSubmit}
          >
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
