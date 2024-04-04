import { useState } from "react";

const PostCreatePage = () => {
  const handleCreatePage = () => {
    alert("게시글을 등록합니다.");
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handleCreatePage}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeHolder="제목을 입력하세요"
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          id="content"
          className="input"
          placeHolder="내용을 입력하세요"
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="w-full flex justify-between mb-2">
          <input
            type="text"
            id="tags"
            className="input w-auto"
            placeHolder="태그를 추가하세요"
          />
          <button className="w-20">추가</button>
        </div>

        <button type="submit" className="button mt-7 mb-5">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
