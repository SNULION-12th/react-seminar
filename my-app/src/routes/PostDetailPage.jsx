import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/posts";
import { BigPost } from "../components/Posts";

const PostDetailPage = () => {
  let { postId } = useParams();
  const [post, setPost] = useState(null);
  const handleDelete = () => {
    alert("삭제되었습니다");
  };
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);
  return (
    post && (
      <div className="flex flex-col items-center">
        <div className="mt-10">
          <BigPost key={post.id} post={post} />
        </div>
        <div className="flex flex-row items-center gap-5 mb-5">
          <Link className="button mt-7" to={`/${post.id}/edit`}>
            수정
          </Link>
          <button className="button mt-7" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
