import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { BigPost } from "../components/Posts/index";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === parseInt(postId));
    setPost(foundPost);
  }, [postId]);

	const handleDelete = () => {
		alert("삭제");
	}

  if (!post) {
    return <div>Loading...</div>;
  }

	return (
		<div className="flex-col items-center">
			<BigPost key={post.id} post={post} />
			<div className="flex flex-row justify-center gap-5">
				<Link to={`/${post.id}/edit`} className="button mt-7">수정</Link>
				<button type="submit" className="button mt-7" onClick={handleDelete}>삭제</button>
			</div>
		</div>
	);	
};

export default PostDetailPage;