const PostCreatePage = () => {
  const handleSignUpSubmit = () => {
    alert("게시물을 등록합니다");
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handleSignUpSubmit}>
        <label required type="text" className="label">
          제목:
        </label>
        <input
          required
          placeholder="제목을 작성하세요"
          type="text"
          id="title"
          className="input"
        />
        <label required className="label">
          내용:
        </label>
        <input
          className="h-64 input"
          placeholder="내용을 작성하세요"
          required
          type="text"
          id="content"
        />
        <label required className="label">
          태그:
        </label>
        <input
          className="input"
          placeholder="태그를 추가하세요"
          type="text"
          id="tag"
        />
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
