import { useNavigate, useParams } from "react-router-dom";
import posts from "../data/posts";
import { useEffect, useState } from "react";
import { BigPost } from "../compoents/Posts";

const PostDetailPage = () => {
  const { postId } = useParams();
  const nav = useNavigate();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    <div className="w-[100%] bottom-0 flex justify-center flex-col items-center">
      <BigPost post={post} />
      <div>
        <form className="form gap-2 mb-5">
          <div className="flex flex-row items-center gap-5">
            <button
              type="reset"
              className="button mt-7"
              onClick={() => {
                nav(`/${postId}/edit`);
              }}
            >
              수정
            </button>
            <button
              type="submit"
              className="button mt-7"
              onClick={() => {
                alert("삭제");
              }}
            >
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostDetailPage;
