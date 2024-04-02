import { useLocation } from "react-router-dom";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";
import { useState, useEffect } from "react";

const PostDetailPage = () => {
  const location = useLocation();
  const postId = location.state.postId;

  const post = posts.find((post) => post.id === parseInt(postId));

  return <div className="w-5/6">{post ? <BigPost post={post} /> : null}</div>;
};

export default PostDetailPage;
