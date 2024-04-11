import { useEffect, useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [addComment, setAddComment] = useState(null);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {}, []);

  const handleCommentDelete = (commentToDelete) => {
    const updatedComments = commentList.filter(
      (comment) => comment.id !== commentToDelete.id
    );
    setCommentList(updatedComments);
    alert("댓글 삭제");
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: new Date().toISOString(),
      content: addComment,
      created_at: new Date().toISOString(),
      post: postId,
      author: {
        id: 0,
        username: "음하하",
      },
    };

    setCommentList([...commentList, newComment]);
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
        새 댓글
        <input
          className="text-black"
          type="text"
          value={addComment}
          onChange={(e) => {
            setAddComment(e.target.value);
          }}
        ></input>
        <button onClick={handleCommentSubmit}>확인</button>
      </form>
    </div>
  );
};

export default Comment;
