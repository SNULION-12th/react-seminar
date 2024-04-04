import posts from "../data/posts";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BigPost } from "../components/Posts";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  let { postId } = useParams();
  const [post, setPost] = useState(null);
  const handleDelete = () => {
    alert("삭제");
  };

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    post && ( //ensure that post != null when returning the following
      <div className="w-3/5">
        <div>
          <BigPost post={post} />
        </div>
        <div className="flex flex-row items-center gap-5 justify-center">
          <Link className="button mt-7" to={`/${postId}/edit`}>
            수정
          </Link>
          <button type="submit" className="button mt-7" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
