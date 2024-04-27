import { useState, useEffect } from "react";

const CommentElement = ({ comment, handleCommentDelete }) => {
    /* TODO: props 받기
       Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */
    const [editing, setEditing] = useState(false);
    /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */
    const [editText, setEditText] = useState(comment.content);
    const [originalText, setOriginalText] = useState(comment.content);


    // comment created_at 전처리
    const date = new Date(comment.created_at);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;

    const handleEditComment = () => {
        setEditing(true);
    }

    const handleCancelEdit = () => {
        console.log(editText)
        setEditing(false);
        setEditText(originalText);
        };

    const handleSaveEdit = () => {
        alert("댓글 수정"); // add api call for editing comment
        const editedComment = {...comment, content: editText};
        setEditText(editedComment.content);
        setOriginalText(editedComment.content);
        setEditing(false);

    };

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div className="w-3/4 flex flex-col gap-1">
            {editing ? (
                    <input
                        type="text"
                        className="border-2 border-gray-300 bg-black rounded-xl px-4 py-2 focus-visible: outline-none focus:border-orange-400 focus:border-2"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                ) : (
                    <p className="text-base">{editText}</p>
                )}
                <span className="text-base text-gray-300">{year}.{month}.{day}</span>
			</div>
			<div className="flex flex-row items-center gap-3">
            {editing ? (
                    <>
                        <button className="text" onClick={handleCancelEdit}>취소</button>
                        <button className="text" onClick={handleSaveEdit}>완료</button>
                    </>
                ) : (
                    <>
                        <button className="text" onClick={handleEditComment}>수정</button>
                        <button className="text" onClick={() => handleCommentDelete(comment.id)}>삭제</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CommentElement;