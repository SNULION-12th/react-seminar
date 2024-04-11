import { useEffect, useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [commentsList, setCommentsList] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
    const newCommentValue = e.target.elements.content.value;
    setNewComment(newCommentValue);

    const createdComment = {
      id: commentsList.length,
      content: newCommentValue,
      created_at: new Date(),
      post: postId,
      author: {
        id: 8,
        username: "아기사자",
      },
    };
    setCommentsList((prevCommentsList) => [
      ...prevCommentsList,
      createdComment,
    ]);

    alert("댓글 작성"); // add api call for creating comment
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
    //setCommentsList({...commentsList, id: commentsList.id.filter((idd) => idd !== commentId),});
    const updatedCommentsList = commentsList.filter(
      (comment) => comment.id !== commentId
    );
    setCommentsList(updatedCommentsList);
  };

  const handleCommentEdit = (commentId, newContent) => {
    const updatedCommentsList = commentsList.map((comment) => {
      if (comment.id === commentId) {
        // Update the content of the edited comment
        return { ...comment, content: newContent };
      }
      return comment; // Return unchanged comment if not the one being edited
    });

    setCommentsList(updatedCommentsList);
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {
        // TODO: comments 더미데이터를 돌며 각 댓글마다 CommentElement를 만들어주세요!
        // Hint: CommentElement에는 댓글인 comment와 댓글 삭제를 하는 handleCommentDelete라는 props가 필요합니다.
        // Hint: CommentElement에는 이후 API 연결을 위한 postId 정보도 필요하겠죠?
      }
      {commentsList.map((comment) => (
        <CommentElement
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          postId={postId}
          handleCommentEdit={handleCommentEdit}
        ></CommentElement>
      ))}
      {
        // TODO: 새로운 댓글을 작성하는 form을 만들어주세요!
      }
      <form
        className="flex flex-row items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <input
          id="content"
          type="text"
          placeholder="댓글을 입력해주세요"
          className=" flex items-left w-11/12 p-3 px-6 rounded-2xl bg-black text-white border border-white text-sm"
        ></input>
        <button
          className="bg-orange-400 text-white py-3 px-6 w-20 rounded-xl text-sm"
          type="submit"
        >
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
