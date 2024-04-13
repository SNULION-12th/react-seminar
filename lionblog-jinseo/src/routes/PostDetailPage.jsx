import posts from "../data/posts";
import { Link, useParams } from "react-router-dom";
import { BigPost } from "../components/Posts";
import { useEffect } from "react";
import { useState } from "react";
import PostEditPage from "./PostEditPage";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);
  const postList = posts;

  // const modif_button = {postList.map((post) => (
  //   key={edit}
  // ))}
  return (
    <div className="w-full px-10 mt-10 flex flex-col items-center">
      <div className="w-4/6">
        {post && <BigPost key={postId} post={post} />}
      </div>
      <form className="flex justify-between gap-2">
        <Link type="reset" className="button mt-7 modify" to={`edit`}>
          수정
        </Link>
        <button
          type="submit"
          className="button mt-7"
          onClick={() => alert("삭제")}
        >
          삭제
        </button>
      </form>
    </div>
  );
};

export default PostDetailPage;
