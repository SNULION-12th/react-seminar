const PostCreatePage = () => {
  const handleCreateSubmit = () => {
    alert("게시글을 등록합니다");
  };

  return (
    <div id="outermost" className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handleCreateSubmit}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeholder="제목을 입력하세요"
        />

        <label htmlfor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          id="content"
          className="input h-52 align-top"
          placeholder="내용을 입력하세요"
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <input
          type="text"
          id="tags"
          className="input"
          placeholder="태그를 입력하세요"
        />

        <div
          id="tag"
          className="flex flex-row justify-start mt-2 mr-auto"
        ></div>

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
