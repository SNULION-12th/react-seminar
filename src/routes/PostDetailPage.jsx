import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BigPost } from "../components/Posts";
import Comment from "../components/Comment";
import {
  getPost,
  getComments,
  deleteComment,
  updateComment,
} from "../apis/api";
import { getUser, deletePost } from "../apis/api";
import { getCookie } from "../utils/cookie";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPostAPI = async () => {
      const post = await getPost(postId);
      setPost(post);
    };
    getPostAPI();
  }, [postId]);
  // 작성했던 getPost()를 호출한 후, setPostList를 통해 postList에 저장

  useEffect(() => {
    // access_token이 있으면 유저 정보 가져옴
    if (getCookie("access_token")) {
      const getUserAPI = async () => {
        const user = await getUser();
        setUser(user);
      };
      getUserAPI();
    }
  }, []);

  // 댓글 데이터 가져옴.
  useEffect(() => {
    const getCommentsAPI = async () => {
      const comments = await getComments(postId);
      setComments(comments);
    };
    getCommentsAPI();
  }, [postId]);

  const navigate = useNavigate();

  const onClickDelete = async () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      await deletePost(postId, navigate);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
    if (!confirmDelete) return;
    try {
      await deleteComment(commentId); // API 호출로 댓글 삭제
      setComments(comments.filter((comment) => comment.id !== commentId)); // 로컬 상태에서 댓글 제거
      window.location.reload();
    } catch (error) {
      console.error("[ERROR] error while deleting comment", error);
    }
  };

  const handleCommentEdit = async (commentId, updatedContent) => {
    try {
      await updateComment(commentId, { content: updatedContent });
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: updatedContent }
            : comment
        )
      ); // 로컬 상태에서 댓글 업데이트
    } catch (error) {
      console.error("[ERROR] error while updating comment", error);
    }
  };

  return (
    post && (
      <div className="flex flex-col items-center w-[60%] p-8">
        <BigPost post={post} />
        <Comment
          postId={postId}
          comments={comments}
          handleCommentDelete={handleCommentDelete}
          handleCommentEdit={handleCommentEdit}
        />

        <div className="flex flex-row gap-3">
          {user?.id === post?.author.id ? (
            <>
              <Link to={`/${post.id}/edit`}>
                <button className="button mt-10 py-2 px-10">수정</button>
              </Link>
              <button
                className="button mt-10 py-2 px-10"
                onClick={onClickDelete}
              >
                삭제
              </button>
            </>
          ) : null}

          {/* user와 post.author가 동일하면 버튼을 리턴, 아니면 null */}
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
