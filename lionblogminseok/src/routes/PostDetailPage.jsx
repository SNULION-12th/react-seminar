import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/Posts";
import { BigPost } from "../components/Posts";

const PostDetailPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return post && <BigPost post={post} />;
};

export default PostDetailPage;
