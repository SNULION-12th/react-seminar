import { useState, useEffect } from "react";
import { getComments, createComment, deleteComment } from "../../apis/api";
import CommentElement from "./CommentElement";
import { getCookie } from "../../utils/cookie";

const Comment = ({ postId }) => {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        const getCommentsAPI = async () => {
          const comments = await getComments(postId);
          setCommentList(comments);
        };
        getCommentsAPI();
    });
    
    const [newComment, setNewComment] = useState({
        post: postId,
        content: "",
    });

    const handleChange = (e) => {
        setNewComment({...newComment, content: e.target.value});
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.content.length > 0) createComment(newComment);
        else alert('내용을 작성해주세요.');
    };

    const handleCommentDelete = async(commentId) => {
        const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
        if (!confirmDelete) return;
        try {
            console.log(commentId);
            await deleteComment(commentId);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {commentList.map((comment) => {
                return (
                    <CommentElement key={comment.id} comment={comment} handleCommentDelete={handleCommentDelete} postId={postId} />
                );
            })}
            {getCookie("access_token") ? (
                <form className="flex flex-row mt-10 gap-3" onSubmit={handleCommentSubmit}>
                    <input type="text" value={newComment.content} placeholder="댓글을 입력해주세요" className="input" style={{ width: "calc(100% - 100px)" }} onChange={handleChange} />
                    <button type="submit" className="button">작성</button>
                </form> ) : null}
        </div>
    );
};

export default Comment;
