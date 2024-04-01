import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PostCUTemplate = ({ initial, mode }) => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initial);

  const updateTempTag = (e) => setPost({ ...post, temp_tag: e.target.value });
  const updateTags = () => {
    const data = { ...post };
    const tagSorted = data.tags.sort((a, b) => a - b);

    data.tags.push({
      id: tagSorted.length === 0 ? 1 : tagSorted[tagSorted.length - 1].id + 1,
      content: post.temp_tag,
    });
    data.temp_tag = "";
    setPost(data);
  };
  const updateTitle = (e) => setPost({ ...post, title: e.target.value });
  const updateContent = (e) => setPost({ ...post, content: e.target.value });
  const deleteTag = (tagId) => {
    const afterDeleted = post.tags.filter((tag) => tag.id !== tagId);
    setPost({ ...post, tags: afterDeleted });
  };

  const onSumbitMethod = (mode) => {
    if (mode === "작성") {
      alert("게시물을 등록합니다.");
    } else if (mode === "수정") alert("게시물을 수정합니다.");
    navigate("/");
  };

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
          className="input"
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
          className="input"
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
            onChange={updateTempTag}
            value={post.temp_tag}
          />
          <button type="button" className="w-20" onClick={updateTags}>
            추가
          </button>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-row w-full">
            {post.tags.map((tag) => (
              <div key={tag.id} className="flex flex-row">
                <label
                  className="tag bg-white text-black m-1"
                  id={`tag_${tag.id}`}
                >
                  {tag.content}
                </label>
                <button type="button" onClick={() => deleteTag(tag.id)}>
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="button">
          완료
        </button>
      </form>
    </main>
  );
};
