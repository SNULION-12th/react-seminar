import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  const handleDelete = () => {
    alert("삭제하시겠습니까?");
  };

  const handleLike = () => {
    alert("좋아요!");
  };

  return (
    post && (
      <div className="flex flex-col items-center w-3/5 p-8">
        <BigPost post={post} />
        <div>
          <Link to={`/${post.id}/edit`}>
            <button className="button mt-10 mx-4 py-2 px-10">수정</button>
          </Link>
          <button
            onClick={handleDelete}
            className="button mt-10 mx-4 py-2 px-10"
          >
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
