import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { BigPost } from "../components/Posts";
import { useState, useEffect } from "react";

const PostDetailPage = () => {
  const postId = useParams().postId;

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    post && (
      <div className="flex justify-center w-full px-10 mt-10">
        <BigPost key={post.id} post={post} />
      </div>
    )
  );
};

export default PostDetailPage;
