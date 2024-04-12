import { useState, useEffect } from "react";
import posts from "../data/posts";
import { BigPost } from "../compoents/Posts";

const PostCreatePage = () => {
  const [post, setPost] = useState({
    id: posts.length,
    title: "",
    content: "",
    author: { id: posts.length, username: "아기사자" },
    tags: [],
    like_users: [],
    created_at: "2024-02-04T07:42:50.658501Z",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [autoCompletes, setAutoCompletes] = useState([]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    const duplicatedTagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }
      return acc;
    }, new Set());
    const tagList = [...duplicatedTagList];
    setTags([...tagList]);
  }, []);

  const handleAutoCompletes = (autoComplete) => {
    const selectedTag = tags.find((tag) => tag === autoComplete);
    if (post.tags.includes(selectedTag)) return; // 입력한 내용이 이미 등록된 태그면 그냥 등록 안됨
    setPost({
      ...post,
      tags: [...post.tags, selectedTag],
    });
    setTagInputValue("");
    setAutoCompletes([]);
  };

  const handleTag = (e) => {
    setTagInputValue(e.target.value);
    if (e.target.value) {
      const autoCompleteData = tags.filter((tag) =>
        tag.includes(e.target.value)
      );
      setAutoCompletes(autoCompleteData);
    } else {
      setAutoCompletes([]);
    }
  };
  const addTag = (e) => {
    e.preventDefault();
    if (post.tags.find((tag) => tag === tagInputValue)) return;
    setPost({
      ...post,
      tags: [...post.tags, tagInputValue],
    });
    setTagInputValue("");
    setAutoCompletes([]);
  };

  const deleteTag = (tag) => {
    setPost({
      ...post,
      tags: post.tags.filter((t) => t !== tag),
    });
  };
  return isSubmitted ? (
    <div className="flex flex-col items-center w-[60%] p-8">
      <BigPost post={post} />
    </div>
  ) : (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form
        className="form gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const createdPost = {
            ...post,
            like_users: [],
            tags: post.tags.map((tag, idx) => {
              return { id: idx + 1, content: tag };
            }),
          };
          setPost(createdPost);
          setIsSubmitted(true);
          alert("게시글을 등록합니다");
        }}
      >
        <label required htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          value={post.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />

        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          id="content"
          value={post.content}
          onChange={handleChange}
          className="input h-56"
          placeholder="내용을 입력하세요"
        />

        <label htmlFor="tag" className="label">
          태그
        </label>

        <div className="flex w-full">
          <input
            type="text"
            placeholder="태그를 추가하세요"
            id="tags"
            className="input grow"
            // 추가 👇🏻
            value={tagInputValue}
            onChange={handleTag}
            // 추가 👆🏻
          />
          <button onClick={addTag} className="small-button w-16">
            추가
          </button>
        </div>
        <div className="flex mt-2 bg-black border-gray-500 rounded-2xl w-full">
          {autoCompletes &&
            autoCompletes.map((autoComplete) => (
              <button
                className="tag rounded-2xl text-start border-gray-500 py-2 px-3 text-white focus:bg-gray"
                key={autoComplete}
                onClick={() => handleAutoCompletes(autoComplete)}
              >
                #{autoComplete}
              </button>
            ))}
        </div>
        {post.tags && (
          <div className="flex w-full mt-3 gap-x-1 flew-nowrap">
            {post.tags.map((tag) => (
              <div key={tag} className="flex">
                <span className="tag active m-1 flex flex-row items-center gap-x-2">
                  <p>#{tag}</p>
                </span>
                <button
                  onClick={() => deleteTag(tag)}
                  className="after:content-['\00d7'] text-xl"
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row items-center gap-5">
          <button type="submit" className="button mt-7">
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreatePage;
