import { useNavigate } from "react-router-dom";
import { SmallPost } from "../components/Posts";
import posts from "../data/posts";

const HomePage = () => {
	const postList = posts;
  const navigate = useNavigate();

    const handleChange = (e) => {};

  return (
    <div>
        <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-white">my blog</h1>
        </div>
        <input
          type="text"
          placeholder="태그를 검색하세요"
          onChange={handleChange}
          className="border border-orange-400 outline-none rounded-2xl text-center py-2 px-20 text-orange-400 bg-transparent"
        />
      </div>
      <div className="grid grid-cols-4 px-10 mt-10">
        {postList.map((post) => (
          <SmallPost key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center m-20 bg-orange-400 text-white font-medium hover:text-black rounded-2xl text-lg px-7 py-2 cursor-pointer width-1/2" onClick={() => navigate("/posts/write")}>
        작성
      </div>
    </div>
  );
};

export default HomePage;