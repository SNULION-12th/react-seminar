import posts from "../data/posts";
import { BigPost } from "../components/Posts";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetailPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [date, setDate] = useState(null);

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    if (post) setPost(post);
  }, [postId]);

  useEffect(() => {
    if (post) {
      const date = new Intl.DateTimeFormat("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(post.created_at));
      setDate(date);
    }
  }, [post]);

  return (
    <main className="flex flex-col items-center max-w-3xl w-screen">
      <form className="form">
        {post && (
          <>
            <BigPost post={post} date={date} />
            <div className="flex flex-row justify-center gap-5">
              <Link to={`/${postId}/edit`}>
                <button className="button">수정</button>
              </Link>

              <button type="submit" className="button">
                삭제
              </button>
            </div>
          </>
        )}
      </form>
    </main>
  );
};

export default PostDetailPage;
