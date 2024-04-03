import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const handleDelete = () => {
    alert("삭제");
  };
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);
  if (!post) {
    return null;
  }

  return (
    <>
      {post && <BigPost post={post} />}
      <div className="postdetailbutton">
        <Link to={`/${post.id}/edit`}>
          {post && <button className="button mt-7 mr-4">수정</button>}
        </Link>
        {post && (
          <button className="button mt-7" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </>
  );
};

export default PostDetailPage;
