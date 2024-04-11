import { useState } from "react";
import comments from "../../data/comments"; 
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    const [commentsList, setCommentsList] = useState(comments);
    const [commentInputValue, setCommentInputValue] = useState("");
    const [newId, setNewID] = useState(4);
    const [newComment, setNewComment] = useState({
        id: 0,
        content: "",
        created_at: "",
        post: postId,
        author: {
            id:0,
            username: "user0",
        },
    });

    const handleNewComment = (e) => {
        setCommentInputValue(e.target.value);
    };
    const editOriginalComment = (commentId, editedText) => {
        const updatedComments = commentsList.map((comment) => {
            if (comment.id === commentId) {
                return {...comment, content: editedText};
            } return comment;
        });
        setCommentsList(updatedComments);
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
        alert("댓글 작성"); 
    };

    const handleCommentDelete = (commentId) => {
		console.log(commentId);
        setCommentsList(commentsList.filter((comment) => comment.id !== commentId));
        alert("댓글 삭제"); 
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
                // TODO: comments 더미데이터를 돌며 각 댓글마다 CommentElement를 만들어주세요!
                // Hint: CommentElement에는 댓글인 comment와 댓글 삭제를 하는 handleCommentDelete라는 props가 필요합니다.
            {commentsList.map((singleComment) => (
                <CommentElement 
                    comment={singleComment} 
                    handleCommentDelete={handleCommentDelete} 
                    editOriginalComment={editOriginalComment}
                    />
            ))}
            // TODO: 새로운 댓글을 작성하는 form을 만들어주세요!
            <form className="flex flex-row items-center justify-center mt-10 gap-2" onSubmit={handleCommentSubmit}>
            <div className="flex w-full flex-col">
                <div className="flex  w-full gap-x-5 h-11">
                    <input
                    type="text"
                    placeholder="댓글을 입력해주세요"
                    id="newComment"
                    className="input grow"
                    value={commentInputValue}
                    onChange={handleNewComment}
                    />
                    <button type="button" className="button py-2 px-2" style={{ whiteSpace: "nowrap" }} onClick={handleCommentSubmit}>
                    작성
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Comment;