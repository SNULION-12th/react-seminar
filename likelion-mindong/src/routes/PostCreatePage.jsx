const PostCreatePage = () => {
  const handleSignUpSubmit3 = () => {
    alert("게시글을 등록합니다."); // TODO: add api call for sign up
  };

  return (
    <div className="flex flex-col w-1/2">
      <h3 className="font-bold text-2xl flex justify-center">게시글 작성</h3>
      <form className="form gap-1" onSubmit={handleSignUpSubmit3}>
        <label htmlFor="text" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="text"
          className="input"
          placeholder="제목을 입력하세요"
        />

        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          id="content"
          className="input h-96 resize-none placeholder-opacity-0 placeholder-top"
          placeholder="내용을 입력하세요"
        ></textarea>

        <label htmlFor="text" className="label">
          태그
        </label>
        <div className="flex flex-row w-full">
          <input
            type="text"
            id="text"
            className="input w-1/2"
            placeholder="태그를 추가하세요"
          />
          <button className="w-20">추가</button>
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
