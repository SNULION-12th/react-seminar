import { Link } from "react-router-dom";
import { SmallPost } from "../components/Posts";
import posts from "../data/posts.js";

const HomePage = () => {
	const postList = posts;

  return (
    <div>
      <div className="grid grid-cols-4 px-10 mt-10">
        {postList.map((post) => (
          <SmallPost key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center m-20">
  <Link className="button" to="/create">
    작성
  </Link>
</div>
    </div>
  );
};

export default HomePage;