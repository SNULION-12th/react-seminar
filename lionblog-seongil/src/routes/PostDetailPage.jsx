import posts from "../data/posts";
import { BigPost } from "../components/Posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetailPage = () => {
  const postId = useParams().postId;
  const post = posts.find((post) => post.id === parseInt(postId));
  const handleDeleteClick = () => {
    alert("삭제"); // TODO: add api call for sign up
  };
  return (
    <div>
      <BigPost key={post.id} post={post} />
      <form>
        <div className="flex flex-row items-center gap-5">
          <Link to={`/${post.id}/edit`}>
            <button type="submit" className="button mt-7">
              수정
            </button>
          </Link>
          <button
            type="button"
            className="button mt-7"
            onClick={handleDeleteClick}
          >
            삭제
          </button>
        </div>
      </form>
    </div>
  );
};
export default PostDetailPage;
