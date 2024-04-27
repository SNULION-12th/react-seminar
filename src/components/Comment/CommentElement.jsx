import { useState, useEffect } from "react";

const CommentElement = ({comment, deleteComment, editComment}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);

    const date = new Date(comment.created_at);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    
    const editCommentStartCancel = () => {
        setIsEditing(!isEditing);
    };

    const handleEditComment = () => {// add api call for editing comment
        editComment(comment.id, editContent);
        setIsEditing(false);
    };

    const handleCommentData = (e) => {
        setEditContent(e.target.value);
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
                        value={editContent.content}
                        onChange={handleCommentData}
                    />
                ) : (
                    <>
                        <p>{comment.content}</p>
                        <span className="text-base text-gray-300">{year}.{month}.{day}</span>
                    </>
                )}
			</div>
			<div className="flex flex-row items-center gap-3">
                {isEditing ? (
                    <>
                        <button onClick={editCommentStartCancel}>취소</button>
                        <button onClick={handleEditComment}>완료</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => deleteComment(comment.id)}>삭제</button>
                        <button onClick={editCommentStartCancel}>수정</button>
                    
                    </>
                )}
            </div>
        </div>
    );
};
export default CommentElement;