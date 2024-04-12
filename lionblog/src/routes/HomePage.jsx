import { SmallPost } from "../components/posts";
import posts from "../data/posts";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePostContext } from "../routes/postContext";

const HomePage = () => {
  const postList = posts;
  const { setSelectedPost } = usePostContext();

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

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
      <div className="justify-center grid grid-cols-4">
        {postList.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post)}>
            <Link to="/post-detail">
              <SmallPost post={post} />
            </Link>
          </div>
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
