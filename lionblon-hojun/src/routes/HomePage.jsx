import { Link, useNavigate } from "react-router-dom";
import { SmallPost } from "../compoents/Posts";
import posts from "../data/posts";
import { useEffect, useState } from "react";

const HomePage = () => {
  const nav = useNavigate();

  const [tags, setTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [postList, setPostList] = useState(posts);

  useEffect(() => {
    const tagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }
      return acc;
    }, new Set());
    setTags([...tagList]);
    setSearchTags([...tagList]);
  }, []);

  const handleTagFilter = (e) => {
    const { innerText } = e.target;
    if (searchValue === innerText.substring(1)) {
      setSearchValue("");
      setPostList(posts);
    } else {
      const activeTag = innerText.substring(1);
      setSearchValue(activeTag);
      const newPosts = posts.filter((post) =>
        post.tags.find((tag) => tag.content === activeTag)
      );
      setPostList(newPosts);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const newTags = tags.filter((tag) => tag.includes(value));
    setSearchTags(newTags);
  };

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
      <div className="flex mt-5 justify-center h-8">
        {searchTags.map((tag) => {
          return (
            <button
              key={tag}
              className={tag === searchValue ? "tag active mr-2" : "tag mr-2"}
              onClick={handleTagFilter}
            >
              #{tag}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-4 px-10 mt-10">
        {postList.map((post) => (
          <SmallPost
            key={post.id}
            post={post}
            onClick={() => {
              nav(`/${post.id}`);
            }}
          />
        ))}
      </div>
      <div className="flex justify-center m-20 button">
        <Link className="button" to="/create">
          작성
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
