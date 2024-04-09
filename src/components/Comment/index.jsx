import { useState } from "react";
import comments from "../../data/comments";
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    // TODO: comments를 저장하기 위한 state를 만들어주세요
    const [postComments, setpostComments] = useState(comments);
    // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
    const [newComment, setNewComment] = useState({
        content: "",
        post: postId,
        created_at: null,
    });

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setpostComments([...postComments, newComment]);
        alert("댓글 작성"); // add api call for creating comment
        // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
        setNewComment({
            content: "",
            post: postId,
            created_at: null,
        });
    };

    const handleCommentDelete = (commentId) => {
				console.log(commentId);
        alert("댓글 삭제"); // add api call for deleting comment
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
                {postComments.map((comment) => (
                    <CommentElement key={comment.id} comment={comment} handleCommentDelete={handleCommentDelete} />
                ))}
            <form className="flex flex-row items-center justify-center mt-10 gap-2">
                <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded-md"
                    placeholder="댓글을 입력해주세요"
                    value={newComment.content}
                    onChange={(e) =>  setNewComment({ ...newComment, content: e.target.value, created_at: new Date().toISOString() })}
                    style={{color: "black"}}
                />
                <button
                    type="submit"
                    className="w-1/4 p-2 bg-blue-500 text-white rounded-md"
                    onClick={handleCommentSubmit}
                >
                    작성
                </button>
            </form>
        </div>
    );
};

export default Comment;