import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";
import Comment from "../components/Comment";

const PostDetailPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);
  // 추가 👇🏻
  const navigate = useNavigate();
  const onClickDelete = () => {
    alert("게시물을 삭제합니다.");
    navigate("/");
    // add api call for deleting post
  };
  // 추가 👆🏻
  return (
    post && (
      <div className="flex flex-col items-center w-[60%] p-8">
        <BigPost post={post} />
        <Comment postId={postId} />
        <div className="flex flex-row gap-3">
          <Link to={`/${post.id}/edit`}>
            <button className="button mt-10 py-2 px-10">수정</button>
          </Link>
          <button className="button mt-10 py-2 px-10" onClick={onClickDelete}>
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
