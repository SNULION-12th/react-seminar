import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    // comments를 저장하기 위한 state를 만들어주세요
    // 새로운 댓글을 추가하기 위한 state를 만들어주세요
    // 댓글 id 관리하기 위한 state 추가했습니다. 댓글 삭제 시 id 중복 방지 위해
    const [commentList, setCommentList] = useState(comments);
    const [commentId, setCommentId] = useState(commentList.length+1);
    const [newComment, setNewComment] = useState({
        id: commentId,
        content: "",
        created_at: new Date().toISOString(),
        post: postId,
        author: { id: 99, username: "아기사자" },   // 아기사지의 UID는 99 가정.
    });

    const handleChange = (e) => {
        setNewComment({ ...newComment, content: e.target.value });
    };
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // alert("댓글 작성");
        // 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화
        setCommentList([...commentList, newComment]);
        setCommentId(commentId+1);
        setNewComment({
            id: commentId,
            content: "",
            created_at: new Date().toISOString(),
            post: postId,
            author: { id: 99, username: "아기사자" },
        });
    };
    const handleCommentEdit = (commentId, editContent) => {
        // console.log(commentId);
        // alert("댓글 수정");
        // commentList에서 commentId에 해당하는 댓글을 찾아서 content를 수정
        let editedList = commentList.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    content: editContent,
                };
            } else {
                return comment;
            }
        });
        setCommentList([...editedList]);
    };
    const handleCommentDelete = (commentId) => {
        // console.log(commentId);
        // alert("댓글 삭제");
        // commentList에서 commentId에 해당하는 댓글을 삭제
        let removedList = commentList.filter((comment) => comment.id !== commentId);
        setCommentList([...removedList]);
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {/* comments 더미데이터를 돌며 각 댓글마다 CommentElement 생성 */}
            {/* 댓글인 comment와 댓글 삭제를 하는 handleCommentDelete라는 props 필요 */}
            {commentList.map((comment) => (
                <CommentElement
                key={comment.id}
                comment={comment} 
                handleCommentEdit={handleCommentEdit}
                handleCommentDelete={handleCommentDelete} 
                />
            ))}

            <form className="flex flex-row items-center justify-center mt-10 gap-2" onSubmit={handleCommentSubmit}>
                <input className="input" onChange={handleChange} value={newComment.content} />
                <button className="button py-2 px-10 h-14 whitespace-nowrap">작성</button>
            </form>
        </div>
    );
};

export default Comment;