import { useState, useEffect } from "react";

const CommentElement = ({comment, handleCommentEdit, handleCommentDelete}) => {
    // 수정 중인지 여부를 나타내는 state
    // 댓글의 수정 내용을 저장하는 state
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(comment.content);
    // comment created_at 전처리
    const date = new Date(comment.created_at);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;

    const handleEditComment = () => {
        setIsEditing(false);
        // 댓글 내용 수정 후 저장
        handleCommentEdit(comment.id, editContent);
    };
    const handleChange = (e) => {
        setEditContent(e.target.value);
    };
    useEffect(() => {// add api call to check if user is the author of the comment
    }, []);

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div className="w-3/4 flex flex-col gap-1">
                {isEditing ? 
                <input 
                type="text"
                value={editContent}
                onChange={handleChange}
                className="input h-10"
                /> 
                : <p>{comment.content}</p>}
                <span className="text-base text-gray-300">{year}.{month}.{day}</span>
            </div>

            <div className="flex flex-row items-center gap-3">
                {isEditing ? 
                <>
                    <span className="cursor-pointer" onClick={() => {setIsEditing(false); setEditContent(comment.content);}}>취소</span>
                    <span className="cursor-pointer" onClick={handleEditComment}>완료</span>
                </>
                :
                <>
                    <span className="cursor-pointer" onClick={() => handleCommentDelete(comment.id)}>삭제</span>
                    <span className="cursor-pointer" onClick={() => setIsEditing(true)}>수정</span>
                </>}
            </div>
        </div>
    );
};
export default CommentElement;