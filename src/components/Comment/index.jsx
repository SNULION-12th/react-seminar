import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {

    const [commentList, setCommentList] = useState(comments);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        alert("댓글 작성"); // add api call for creating comment
        const newCommentObj = {
            id: commentList.length + 1,
            content: newComment,
            created_at: new Date().toISOString(),
            post: postId,
            author: {
                id: 1,
                username: "user1"
            }
        };
        setCommentList(prevComments => [...prevComments, newCommentObj]);
        alert("댓글 작성");
        setNewComment("");
    };

    const handleCommentDelete = (commentId) => {
		console.log(commentId);
        alert("댓글 삭제"); // add api call for deleting comment
        const updatedComments = commentList.filter(comment => comment.id !== commentId);
        setCommentList(updatedComments);
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {commentList.map(comment => (
                <CommentElement
                    key={comment.id}
                    comment={comment}
                    handleCommentDelete={handleCommentDelete}
                />
            ))}

            <form className="flex flex-row items-center justify-center mt-10 gap-2" onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    className="border-2 bg-black rounded-xl px-4 py-2 w-full focus-visible: outline-none focus:border-orange-400 focus:border-2"
                    placeholder="댓글을 입력해주세요"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" className="button w-24">작성</button>
            </form>
        </div>
    );
};

export default Comment;