import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext, PostsDataContext } from "../../App";

export const PostWriteTemplate = ({ initial, mode }) => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initial);

  const [tags, setTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [autoCompletes, setAutoCompletes] = useState([]);

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

  const handleAutoCompletes = (autoComplete) => {
    const selectedTag = tags.find((tag) => tag === autoComplete);
    const postTagContents = post.tags.map((tag) => tag.content);

    if (postTagContents.includes(selectedTag)) return; // 입력한 내용이 이미 등록된 태그면 그냥 등록 안됨

    const data = { ...post };
    const validTags = data.tags.filter((tag) => !!tag);
    const tagSorted = validTags.sort((a, b) => a.id - b.id);

    data.tags.push({
      id: tagSorted.length === 0 ? 1 : tagSorted[tagSorted.length - 1].id + 1,
      content: selectedTag,
    });
    setPost(data);
    setTagInputValue("");
    setAutoCompletes([]);
  };

  const darkMode = useContext(DarkModeContext);
  const posts = useContext(PostsDataContext);

  const updateTags = () => {
    const data = { ...post };
    const validTags = data.tags.filter((tag) => !!tag);
    const tagSorted = validTags.sort((a, b) => a.id - b.id);

    data.tags.push({
      id: tagSorted.length === 0 ? 1 : tagSorted[tagSorted.length - 1].id + 1,
      content: tagInputValue,
    });
    setPost(data);
    setTagInputValue("");
  };

  const updateTitle = (e) => setPost({ ...post, title: e.target.value });
  const updateContent = (e) => setPost({ ...post, content: e.target.value });
  const deleteTag = (tagId) => {
    const data = { ...post };
    const afterDeleted = data.tags.filter((tag) => tag && tag.id !== tagId);
    setPost({ ...post, tags: afterDeleted });
  };

  const onSumbitMethod = (mode) => {
    if (mode === "작성") {
      alert("게시물을 등록합니다.");
      // posts.push()
      const validPosts = posts.filter((post) => !!post);
      const newId =
        validPosts.sort((a, b) => a.id - b.id)[validPosts.length - 1].id + 1;
      const author = { id: 6, username: "태형" };
      const created_at = new Date();
      posts.push({
        ...post,
        id: newId,
        author: author,
        created_at: created_at,
      });
    } else if (mode === "수정") {
      alert("게시물을 수정합니다.");
      posts.forEach((p, i, arr) => {
        if (p && p.id === post.id) arr[i] = { ...post };
      });
    }
    navigate("/");
  };

  useEffect(() => {
    const duplicatedTagList = posts.reduce((acc, post) => {
      if (post) for (let tag of post.tags) acc.add(tag.content);

      return acc;
    }, new Set());
    const tagList = [...duplicatedTagList];
    setTags([...tagList]);
    console.log("tagList", tagList);
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <main className="main-container">
      <h3 className="font-bold text-2xl">게시글 {mode}</h3>
      <form
        method="POST"
        className="form gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onSumbitMethod(mode);
        }}
      >
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          type="text"
          id="title"
          required
          className={`input ${darkMode ? "input-dark" : "input-light"}`}
          placeholder="제목을 입력하세요."
          onChange={updateTitle}
          value={post.title}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          id="content"
          cols="30"
          rows="10"
          className="input textarea"
          placeholder="내용을 입력하세요."
          value={post.content}
          onChange={updateContent}
        ></textarea>
        <label htmlFor="tag" className="label">
          태그
        </label>
        <div className="flex flex-row w-full">
          <input
            type="text"
            className="input grow"
            placeholder="태그를 추가하세요."
            onChange={handleTag}
            value={tagInputValue}
          />
          <button type="button" className="w-20" onClick={updateTags}>
            추가
          </button>
        </div>
        <div className="flex mt-2 border-gray-500 rounded-2xl w-full">
          {autoCompletes &&
            autoCompletes.map((autoComplete) => (
              <button
                className="tag rounded-2xl text-start border-gray-500 py-2 px-3 text-white focus:bg-gray"
                key={autoComplete}
                onClick={() => handleAutoCompletes(autoComplete)}
                type="button"
              >
                #{autoComplete}
              </button>
            ))}
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-row w-full">
            {post.tags.map(
              (tag) =>
                tag && (
                  <div
                    key={tag.id}
                    className="flex flex-row animate-tag_bounce"
                  >
                    <label
                      className="tag bg-white text-black m-1 "
                      id={`tag_${tag.id}`}
                    >
                      {tag.content}
                    </label>
                    <button type="button" onClick={() => deleteTag(tag.id)}>
                      X
                    </button>
                  </div>
                )
            )}
          </div>
        )}
        <button type="submit" className="button">
          완료
        </button>
      </form>
    </main>
  );
};
