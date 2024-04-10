import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
    // TODO: comments를 저장하기 위한 state를 만들어주세요
    // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        alert("댓글 작성"); // add api call for creating comment
        // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
    };

    const handleCommentDelete = (commentId) => {
				console.log(commentId);
        alert("댓글 삭제"); // add api call for deleting comment
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
                // TODO: comments 더미데이터를 돌며 각 댓글마다 CommentElement를 만들어주세요!
                // Hint: CommentElement에는 댓글인 comment와 댓글 삭제를 하는 handleCommentDelete라는 props가 필요합니다.
                // Hint: CommentElement에는 이후 API 연결을 위한 postId 정보도 필요하겠죠?
            
            // TODO: 새로운 댓글을 작성하는 form을 만들어주세요!
            <form className="flex flex-row items-center justify-center mt-10 gap-2" ...>
                ...
            </form>
        </div>
    );
};

export default Comment;