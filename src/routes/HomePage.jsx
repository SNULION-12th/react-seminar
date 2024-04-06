import { useState, useEffect } from "react";
import { SmallPost } from "../components/Posts";
import { Link } from "react-router-dom";
import posts from "../data/posts";

const HomePage = () => {
  const [postList, setPostList] = useState(posts); //태그 검색 결과에 따라 재랜더링을 위해서 state로 정의

  const [tags, setTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const handleChange = (e) => {
    const { value } = e.target;
    const newTags = tags.filter((tag) => tag.includes(value)); //입력값의 내용을 포함한 tag들을 filter로 모아서 searchtag로 상태 변경
    setSearchTags(newTags);
  };

  const handleTagFilter = (e) => {
    const { innerText } = e.target; //선택된 대상의 innerText만 뽑아오는 방법
    if (searchValue === innerText.substring(1)) {
      //클릭시 태그가 이미 선택되어 있던 상태라면 입력 값을 초기화하고 post 재렌더링
      setSearchValue("");
      setPostList(posts);
    } else {
      //눌려있지 않는 상태라면 선택된 값을 activeTag에 넣고 입력값 상태 변경
      // -> 그 후 activeTag와 같은 내용의 tag를 가진 post만 filter해서 새로운 post로 상태 변경
      const activeTag = innerText.substring(1);
      setSearchValue(activeTag);
      const newPosts = posts.filter((post) =>
        post.tags.find((tag) => tag.content === activeTag)
      );
      setPostList(newPosts);
    }
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
          onChange={handleChange} //입력값 변경시 handleChange 호출
          className="border border-orange-400 outline-none rounded-2xl text-center py-2 px-20 text-orange-400 bg-transparent"
        />
      </div>
      <div className="flex mt-5 justify-center">
        {searchTags.map((tag) => {
          return (
            <button
              key={tag}
              className={tag === searchValue ? "tag active mr-2" : "tag mr-2"} //searchValue와 같은 값만 살리는 active 테일윈드
              onClick={handleTagFilter} //tag 버튼이 눌리면 handleTagFilter 함수 발생
            >
              #{tag}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 px-10 mt-10">
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
