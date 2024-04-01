import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BigPost } from "../components/Posts";
import posts from "../data/posts";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const postId = useParams().postId;

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  const handleDeleteButtonClick = () => {
    alert("삭제 버튼을 클릭했습니다!");
    // TODO: 실제 삭제 동작 수행
  };

  return (
    post && (
      <div className="flex flex-col items-center w-1/2">
        <BigPost key={post.id} post={post} />
        <div className="flex flex-row items-center gap-5">
          <Link to={`/${post.id}/edit`} className="button mt-7">
            수정
          </Link>
          <button onClick={handleDeleteButtonClick} className="button mt-7">
            삭제
          </button>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
