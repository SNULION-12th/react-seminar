import posts from "../data/posts";
import { BigPost } from "../components/Posts";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams(); //useParams 훅 사용

  const deleteHandler = () => {
    alert("삭제했어용");
  };

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    <div className="w-3/5">
      {post && <BigPost post={post} />}
      <div className="flex flex-row justify-center my-10 ">
        <Link to={`/${postId}/edit`}>
          <button className="button mr-5">수정</button>
        </Link>
        <button onClick={deleteHandler} className="button">
          삭제
        </button>
      </div>
    </div>
  );
};

export default PostDetailPage;
