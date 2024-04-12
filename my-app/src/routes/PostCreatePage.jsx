import { useState } from "react";

const PostCreatePage = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleAddTag = () => {
    const tagInput = document.getElementById("tags");
    const newTag = tagInput.value.trim();
    if (newTag !== "") {
      setPost((prevPost) => ({
        ...prevPost,
        tags: [...prevPost.tags, newTag],
      }));
      tagInput.value = "";
    }
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (post.title.trim() !== "" && post.content.trim() !== "") {
      alert("게시글을 등록합니다.");
      // 게시글 등록 로직 추가
    } else {
      alert("제목과 내용을 입력하세요.");
    }
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handleCreateSubmit}>
        <label htmlFor="title" className="label">
          제목:
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          id="title"
          name="title"
          className="input"
          value={post.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="content" className="label">
          내용:
        </label>
        <textarea
          placeholder="내용을 입력하세요"
          id="content"
          name="content"
          cols="30"
          rows="10"
          className="input"
          value={post.content}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="tags" className="label">
          Tags
        </label>
        <div className="flex  w-full gap-x-5">
          <input
            type="text"
            placeholder="태그를 추가하세요"
            id="tags"
            className="input grow"
          />
          <button
            type="button"
            className="small-button w-16"
            onClick={handleAddTag}
          >
            추가
          </button>
        </div>
        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
