import { useState } from "react";
import comments from "../../data/comments";

const Comment = ({ postId }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleCommentChange = (e) => {
    setNewCommentContent(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (editingCommentId) {
      const updatedComments = commentList.map((cmt) => {
        if (cmt.id === editingCommentId) {
          return { ...cmt, content: newCommentContent };
        }
        return cmt;
      });
      setCommentList(updatedComments);
      setEditingCommentId(null);
    } else {
      const newComment = {
        id: commentList.length + 1,
        content: newCommentContent,
        created_at: new Date().toISOString(),
        post: { postId },
        author: {
          id: 100,
          username: "admin",
        },
      };
      setCommentList([...commentList, newComment]);
    }
    setNewCommentContent("");
  };

  const applyEdit = () => {
    handleCommentSubmit(new Event("submit"));
  };

  const cancelEdit = () => {
    setEditingCommentId(null);
    setNewCommentContent("");
  };

  const handleCommentDelete = (id) => {
    const updatedComments = commentList.filter((cmt) => cmt.id !== id);
    setCommentList(updatedComments);
  };

  const handleCommentEdit = (id, content) => {
    setEditingCommentId(id);
    setNewCommentContent(content);
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentList.map((cmt) => (
        <div key={cmt.id} className="flex justify-between my-5">
          {editingCommentId === cmt.id ? (
            <>
              <input
                type="text"
                value={newCommentContent}
                onChange={handleCommentChange}
                className="border-2 border-white w-full px-6 py-3 mr-6 rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent;"
              />
              <button onClick={cancelEdit} className="mr-1 w-11">
                취소
              </button>
              <button onClick={applyEdit} className="mr-1 w-11">
                적용
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <div className="my-0.5">{cmt.content}</div>
                <div className="my-0.5 text-gray-400">
                  {cmt.created_at.substring(0, 10)}
                </div>
              </div>
              <div className="flex flex-row">
                <button
                  onClick={() => handleCommentEdit(cmt.id, cmt.content)}
                  className="mx-2"
                >
                  수정
                </button>
                <button
                  onClick={() => handleCommentDelete(cmt.id)}
                  className="mx-2"
                >
                  삭제
                </button>
              </div>
            </>
          )}
        </div>
      ))}
      {editingCommentId === null && (
        <form onSubmit={handleCommentSubmit} className="form">
          <div className="flex w-full flex-row">
            <input
              type="text"
              placeholder="댓글을 입력해주세요"
              value={newCommentContent}
              onChange={handleCommentChange}
              className="border-2 border-white w-full mr-4 px-6 py-3 rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent;"
            />
            <button
              type="submit"
              className="small-button w-20 rounded-2xl bg-orange-400"
            >
              작성
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Comment;
