import { useState, useEffect } from "react";

const CommentElement = ({
    comment, 
    handleCommentDelete, 
    editOriginalComment,
}) => {
    const [isModifying, setIsModifying] = useState(false);
    const [commentContent, setCommentContent] = useState(comment.content);
    const date = new Date(comment.created_at);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;

    const handleChangeComment = (e) => {
        setCommentContent(e.target.value);
    }

    const handleEditComment = () => {
        editOriginalComment(comment.id, commentContent);
        setIsModifying(false);
        alert("댓글 수정"); 
    };

    useEffect(() => { 
    }, []);

    return (
        <div className="w-full flex flex-row justify-between items-center mb-5">
            <div className="w-3/4 flex flex-col gap-1">
                {isModifying ? (
                    <input
                    className="p-2 bg-black ring-2 ring-white hover:ring-orange-300 rounded-xl w-[80%]"
                    value={commentContent} onChange={handleChangeComment} />         
                ) : (
                  <p>{comment.content}</p>    
                )}
                <span className="text-base text-gray-300">
                    {year}.{month}.{day}
                </span>
			</div>

		<div className="flex flex-row items-center gap-3">
            {isModifying ? (
                <>
                    <button className="small-button" 
                    onClick={()=> {setCommentContent(comment.content); setIsModifying(false); }}>
                        취소
                    </button>
                    <button className="small-button" onClick={handleEditComment}>
                        완료
                    </button>
                </>
            ) : (
                <>
                    <button className="small-button" onClick={()=> {console.log(comment); handleCommentDelete(comment.id);}}>
                        삭제 
                    </button>
                    <button className="sall-button" onClick={()=> {setIsModifying(true);}}>
                        수정
                    </button>
                </>

            )}
        </div>
       </div>
    );
};
export default CommentElement;