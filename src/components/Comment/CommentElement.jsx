import { useState, useEffect } from "react";

const CommentElement = ({comment, deleteComment}) => {
    
    const [editingComment, setEditingComment] = useState(comment);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCommentContent, setCurrentCommentContent] = useState(comment.content);

    const date = new Date(comment.created_at);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    
    const editCommentStartEnd = () => {
        setIsEditing(!isEditing);
        setCurrentCommentContent(editingComment.content);
    }
    const editCommentCancel = () => {
        setIsEditing(!isEditing);
        setEditingComment({
            ...editingComment,
            content: currentCommentContent,
        })
    }
    const handleEditComment = () => {// add api call for editing comment
    };

    const handleCommentData = (e) => {
        const { id, value } = e.target;
        setEditingComment({...editingComment, [id]: value});
    }

    useEffect(() => { // add api call to check if user is the author of the comment
    }, []);

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div className="w-3/4 flex flex-col gap-1">
                {isEditing ? (
                    <input 
                        type="text"  
                        className="input" 
                        id="content"
                        value={editingComment.content}
                        onChange={handleCommentData}
                    />
                ) : (
                    <>
                        <p>{editingComment.content}</p>
                        <span className="text-base text-gray-300">{year}.{month}.{day}</span>
                    </>
                )}
			</div>
			<div className="flex flex-row items-center gap-3">
                {isEditing ? (
                    <>
                        <button onClick={editCommentCancel}>취소</button>
                        <button onClick={editCommentStartEnd}>완료</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => deleteComment(comment.id)}>삭제</button>
                        <button onClick={editCommentStartEnd}>수정</button>
                    
                    </>
                )}
            </div>
        </div>
    );
};
export default CommentElement;