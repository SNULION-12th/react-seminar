import { useEffect, useState } from "react";
import CommentElement from "./CommentElement";
import { createComment, deleteComment, getComments } from "../../apis/api";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]); // state for comments
  const [newContent, setNewContent] = useState(""); // state for new comment

  // comment 가져오기
  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setCommentList(comments);
    };
    getCommentsAPI();
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newContent.length !== 0) {
      const newComment = {
        content: newContent,
        post: postId,
      };
      createComment(newComment);
      setCommentList([
        // TODO: add api call for creating comment
        ...commentList,
      ]);
      setNewContent("");
    } else {
      alert("빈 댓글은 안돼요~");
    }
  };

  const handleCommentDelete = async (commentId) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      await deleteComment(commentId);
    } catch (error) {
      console.error(error);
    }
    setCommentList(commentList.filter((comment) => comment.id !== commentId)); // TODO: add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((comment) => {
        return (
          <CommentElement
            key={comment.id}
            comment={comment}
            handleCommentDelete={handleCommentDelete}
            postId={postId}
          />
        );
      })}

      <form
        className="flex flex-row mt-10 gap-3"
        onSubmit={handleCommentSubmit}
      >
        <input
          type="text"
          value={newContent}
          placeholder="댓글을 입력해주세요"
          className="input"
          style={{ width: "calc(100% - 100px)" }}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit" className="button">
          작성
        </button>
      </form>
    </div>
  );
};

export default Comment;
