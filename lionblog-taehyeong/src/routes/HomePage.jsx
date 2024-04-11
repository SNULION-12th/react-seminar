import { useContext, useEffect, useState } from "react";
import { SmallPost } from "../components/Posts";
// import posts from "../data/posts";
import { Link } from "react-router-dom";
import { PostsDataContext } from "../App";

const HomePage = () => {
  // const postList = posts;
  const postList = useContext(PostsDataContext);
  const [visiblePosts, setVisiblePosts] = useState(postList);

  const [tags, setTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    const newTags = tags.filter((tag) => tag.includes(value));
    setSearchTags(newTags);
  };

  const handleTagFilter = (e) => {
    const { innerText } = e.target;
    const tag = innerText.substring(1);
    searchValue.includes(tag)
      ? setSearchValue([...searchValue.filter((v) => v !== tag)])
      : setSearchValue([...searchValue, tag]);
  };

  useEffect(() => {
    const tagList = postList.reduce((acc, post) => {
      if (post) for (let tag of post.tags) acc.add(tag.content);
      return acc;
    }, new Set());
    setTags([...tagList]);
    setSearchTags([...tagList]);
  }, []);

  useEffect(() => {
    if (searchValue.length === 0) setVisiblePosts(postList);
    else {
      const newPosts = postList.filter((post) =>
        searchValue.every((v) => post.tags.find((t) => t.content === v))
      );
      setVisiblePosts(newPosts);
    }
  }, [searchValue]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl">my blog</h1>
        </div>
        <input
          type="text"
          placeholder="태그를 검색하세요"
          onChange={handleChange}
          className="border border-orange-400 outline-none rounded-2xl text-center py-2 px-20 text-orange-400 bg-transparent"
        />
      </div>
      <div className="flex mt-5 justify-center flex-wrap">
        {searchTags.map((tag) => {
          return (
            <button
              key={tag}
              className={
                searchValue.includes(tag) ? "tag active mr-2" : "tag mr-2"
              }
              onClick={handleTagFilter}
            >
              #{tag}
            </button>
          );
        })}
      </div>
      <div className="max-sm:flex max-sm:flex-col max-sm:items-center sm:grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 px-10 mt-10">
        {visiblePosts.map((post) =>
          post ? <SmallPost key={post.id} post={post} /> : null
        )}
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
