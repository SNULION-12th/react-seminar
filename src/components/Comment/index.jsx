import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  const [commentList, setCommentList] = useState(comments);
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [newContent, setNewContent] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        postId,
        content: newContent,
        created_at: "2024-04-08T15:09:43Z",
      },
    ]);
    setNewContent("");
  };

  const handleCommentDelete = (commentId) => {
    // console.log(commentId);
    // alert("댓글 삭제"); // add api call for deleting comment
    const updatedComments = commentList.filter(
      (comment) => comment.id !== commentId
    );
    setCommentList(updatedComments);
  };

  const handleCommentEdit = (commentId, editedComment) => {
    const filteredComment = commentList.map((comment) => {
      if (comment.id === commentId) {
        comment.content = editedComment;
        return comment;
      }
      return comment;
    });
    setCommentList(filteredComment);
  };
  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {/* // TODO: comments 더미데이터를 돌며 각 댓글마다 CommentElement를 만들어주세요! // Hint: CommentElement에는 댓글인 comment와 댓글 삭제를
      하는 handleCommentDelete라는 props가 필요합니다. // TODO: 새로운 댓글을
      작성하는 form을 만들어주세요! */}
      {commentList.map((comment) => (
        <CommentElement
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
        />
      ))}
      <form
        className="flex items-center justify-center mt-10 gap-2"
        onSubmit={handleCommentSubmit}
      >
        <input
          type="text"
          value={newContent}
          placeholder="댓글을 입력해주세요"
          className="input h-14"
          onChange={(e) => setNewContent(e.target.value)}
        />

        <button type="submit" className="button flex-none ">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
