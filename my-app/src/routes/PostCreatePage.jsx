const PostCreatePage = () => {
  const handlePostSubmit = () => {
    alert("게시글을 등록합니다."); // TODO: add api call for sign up
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="font-bold text-2xl">게시글 작성</div>
      <form className="form gap-2" onSubmit={handlePostSubmit}>
        <label required htmlFor="title" className="label">
          제목:
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeholder="제목을 입력하세요."
        />

        <label required htmlFor="content" className="label">
          내용:
        </label>
        <textarea
          required
          id="content"
          className="input h-56"
          placeholder="내용을 입력하세요."
        />

        <label htmlFor="tag" className="label">
          태그:
        </label>
        <div className="flex w-full">
          <input
            id="tag"
            className="input"
            placeholder="태그를 추가해주세요."
          />
          <button className="w-12">추가</button>
        </div>

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
