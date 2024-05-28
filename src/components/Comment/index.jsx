import { useEffect, useState } from "react";
import CommentElement from "./CommentElement";
import { createComment, deleteComment, getComments, getUser } from "../../apis/api";

const Comment = ({ postId }) => {
    const [commentList, setCommentList] = useState([]); // state for comments
    const [newContent, setNewContent] = useState(""); // state for new comment
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const getCommentList = async () => {
            const comment = await getComments(postId);
            setCommentList(comment);
        };
        getCommentList();

        getUser().then((response) => {
            setUserId(response.id);
        });
        
    }, []);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        setCommentList([ // TODO: add api call for creating comment
            ...commentList,
            {
                post: postId,
                content: newContent,
                author: userId,
            }
        ]);
        await createComment({
            post: postId,
            content: newContent,
            author: userId,
        });
        setNewContent("");
    };

    const handleCommentDelete = async (commentId) => {
        await deleteComment(commentId);
        setCommentList(commentList.filter((comment) => comment.id !== commentId));
    };

    return (
        <div className="w-full mt-5 self-start">
            <h1 className="text-3xl font-bold my-5">Comments</h1>
            {commentList?.map((comment) => {
                return (
                    <CommentElement key={comment.id} comment={comment} handleCommentDelete={handleCommentDelete} postId={postId} />
                );
            })}
            
            <form className="flex flex-row mt-10 gap-3" onSubmit={handleCommentSubmit}>
                <input type="text" value={newContent} placeholder="댓글을 입력해주세요" className="input" style={{ width: "calc(100% - 100px)" }} onChange={(e) => setNewContent(e.target.value)} />
                <button type="submit" className="button">작성</button>
            </form>
        </div>
    );
};

export default Comment;
