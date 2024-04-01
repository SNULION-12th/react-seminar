import { useState } from "react";

const PostCreatePage = () => {
  const handlePostSubmit = () => {
    alert("게시글을 등록합니다!"); // TODO: add api call for sign up
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handlePostSubmit}>
        <label required className="label" htmlFor="title">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          className="input"
        />
        <label required className="label">
          내용
        </label>
        <input
          required
          type="text"
          id="contents"
          placeholder="내용을 입력하세요"
          className="input h-60"
        />
        <label required className="label">
          태그
        </label>
        <input
          type="text"
          id="tags"
          placeholder="태그를 추가하세요"
          className="input"
        />

        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
