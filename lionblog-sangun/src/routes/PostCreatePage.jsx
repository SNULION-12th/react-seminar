const PostCreatePage = () => {
  const handleCreateSubmit = () => {
    alert("게시글을 등록합니다."); // TODO: add api call for sign in
  };
  const handleTagsAdd = () => {
    alert("태그 추가"); // TODO: add api call for sign in
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handleCreateSubmit}>
        <label required htmlFor="title" className="label">
          제목:
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeholder="제목을 입력하세요"
        />

        <label htmlFor="content" className="label">
          내용:
        </label>
        <textarea
          required
          type="text"
          id="content"
          className="input h-56"
          placeholder="내용을 입력하세요"
        />

        <label htmlFor="tag" className="label">
          태그:
        </label>
        <div className="flex w-full">
          <input id="tag" className="input" placeholder="태그를 추가하세요" />
          <button onClick={handleTagsAdd} type="button" className="w-20">
            추가
          </button>
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
