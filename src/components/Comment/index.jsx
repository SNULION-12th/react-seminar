import { useState, useEffect } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    // TODO: comments를 저장하기 위한 state를 만들어주세요
    // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
    const [commentList, setCommentList] = useState(comments);
    const [commentID, setCommentID] = useState(4);
    const [newComment, setNewComment] = useState({
        id: commentID,
        content: "",
        created_at: "2024-04-08T19:00:00Z",
        post: postId,
        author: {
            id: "00",
            username: "user00",
        },
    });

    const handleCommentData = (e) => {
        const { id, value } = e.target;
        setNewComment({...newComment, id: commentID, [id]: value});
    }
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setCommentID(commentID+1);
        console.log('commentID : ', commentID);
        setCommentList([...commentList,newComment]);
        setNewComment({
            id: "",
            content: "",
            created_at: "2024-04-08T19:00:00Z",
            post: postId,
            author: {
                id: "00",
                username: "user00",
            },
        });
    };
    
    const handleCommentDelete = (commentId) => {
        console.log(commentId);
        const removeComment = commentList.filter((comment) => comment.id !== parseInt(commentId));
        console.log(removeComment);
        setCommentList(removeComment);
    };
    const handleCommentEdit = (commentId, commentContent) => {
        setCommentList(
            commentList.map((comment) => {
                if(commentId === comment.id) return {...comment, content: commentContent};
                else return comment;
            })
        );
    }
    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {commentList.map((comment) => (
                <CommentElement comment={comment} deleteComment={handleCommentDelete} editComment={handleCommentEdit}/>
            ))}
            <form className="flex flex-row items-center justify-center mt-10 gap-2" >
                <input 
                    required 
                    type="text"  
                    className="input" 
                    id="content"
                    value={newComment.content}
                    onChange={handleCommentData}
                />
                <button className="button w-28 py-2 px-10" onClick={handleCommentSubmit}>작성</button>
            </form>
        </div>
    );
};

export default Comment;