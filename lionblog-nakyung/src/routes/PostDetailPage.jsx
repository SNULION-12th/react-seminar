import posts from "../data/posts";
import { Link } from "react-router-dom";
import { BigPost } from "../components/Posts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetailPage = () => {
  const postId = useParams().postId;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    console.log(post);
    setPost(post);
  }, [postId]);

  const handleDelete = () => {
    alert("삭제");
  };

  return (
    post && (
      <div className="w-3/5">
        <BigPost post={post} />
        <div className="flex justify-center m-20">
          <button className="button m-7" onClick={handleDelete}>
            삭제
          </button>
          <Link className="button m-7" to={`/${postId}/edit`}>
            수정
          </Link>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
