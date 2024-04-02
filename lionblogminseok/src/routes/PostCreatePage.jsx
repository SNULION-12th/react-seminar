import React from "react";

const PostCreatePage = () => {
  const handleSubmit = () => {
    alert("게시글을 등록합니다."); // TODO: add api call for sign up
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center w-3/5 ">
        <div className="flex ">
          <h3 className="font-bold text-2xl">게시글 작성</h3>
        </div>
        <form className="form gap-2" onSubmit={handleSubmit}>
          <label required htmlFor="title" className="label">
            제목
          </label>
          <input
            required
            type="text"
            id="title"
            className="input mb-3"
            placeholder="제목을 입력하세요"
          />
          <label required htmlFor="content" className="label">
            내용
          </label>
          <textarea
            required
            type="text"
            id="content"
            className="input h-64 "
            placeholder="내용을 입력하세요"
          />
          <label required htmlFor="tag" className="label">
            태그
          </label>
          <div className="flex flex-row w-full">
            <input
              id="tag"
              className="input "
              placeholder="태그를 추가하세요"
            />
            <button className="w-20">추가</button>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="button mt-7">
              완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreatePage;
