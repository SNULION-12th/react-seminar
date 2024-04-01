import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { BigPost } from "../components/Posts";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);
  const handleDelete = () => {
    alert("삭제"); // TODO: add api call for sign up
  };

  return (
    <div className="w-5/6">
      <div className="px-10 mt-10 flex justify-center">{post && <BigPost post={post} />}</div>
      <div className="flex flex-row justify-center gap-5 mb-5">
        <Link to="edit">
        <button className="button mt-7">
          수정
        </button>
        </Link>
        <button className="button mt-7" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};
export default PostDetailPage;
