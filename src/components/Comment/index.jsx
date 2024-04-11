import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  const [commentsList, setCommentsList] = useState(
    comments.filter((comment) => comment.post === parseInt(postId))
  );
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [commentInputValue, setCommentInputValue] = useState("");
  const [newId, setNewID] = useState(4);
  const [newComment, setNewComment] = useState({
    id: 0,
    content: "",
    created_at: "",
    post: postId,
    author: {
      id: 0,
      username: "user0",
    },
  });

  const handleNewComment = (e) => {
    setCommentInputValue(e.target.value);
  };

  const editOriginalComment = (commentId, editedText) => {
    const updatedComments = commentsList.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: editedText };
      }
      return comment;
    });
    setCommentsList(updatedComments); // 수정된 배열을 commentsList에 할당
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const createdComment = {
      ...newComment,
      id: newId,
      content: commentInputValue,
      created_at: Date.now(),
    };
    setNewID(newId + 1);
    setCommentsList([...commentsList, createdComment]);
    setCommentInputValue("");
    alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    setCommentsList(commentsList.filter((comment) => comment.id !== commentId));
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentsList.map((singleComment) => (
        <CommentElement
          commentId={singleComment.id}
          comment={singleComment}
          handleCommentDelete={handleCommentDelete}
          editOriginalComment={editOriginalComment}
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
