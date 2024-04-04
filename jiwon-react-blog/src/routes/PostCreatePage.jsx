import { useState } from "react";

const PostCreatePage = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [""],
  });

  const postHandler = (e) => {
    const { title, content, tags } = e.target;
    console.log(title, content);
    alert("게시물을 등록합니다.");
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={postHandler}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          className="input"
          placeholder="제목을 입력하세요"
          id="title"
        />

        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          className="input h-72"
          placeholder="내용을 입력하세요"
          id="content"
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex flex-row w-full justify-between">
          <input
            className="input w-10/12"
            placeholder="태그를 추가하세요"
            id="tags"
          />
          <span className="w-1/6 pt-2 text-center align-middle">추가</span>
        </div>
        <div>
          <button type="submit" className="button mt-10 mb-3">
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreatePage;
