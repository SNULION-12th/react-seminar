const PostCreatePage = () => {
  const create_page = () => {
    alert("게시물을 등록합니다.");
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글작성</h3>
      <form className="form gap-2" onSubmit={create_page}>
        <label htmlFor="title" className="label">
          *제목:
        </label>
        <input
          required
          placeholder="제목을 입력하세요."
          type="text"
          id="title"
          className="input"
        />
        <label htmlFor="content" className="label">
          *내용:
        </label>
        <textarea
          required
          placeholder="내용을 입력하세요."
          type="text"
          id="content"
          className="border-2 border-white w-full h-80 px-6 py-3 text-wrap text-start rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        />
        <label htmlFor="tag" className="label">
          태그:
        </label>
        <div className="flex flex-row w-full items-center justify-between">
          <input
            type="text"
            placeholder="태그를 추가하세요."
            id="tag"
            className="border-2 border-white w-full px-6 py-3 rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent;"
          />
          <p className="w-20 px-5">추가</p>
        </div>
        <button type="submit" className="button my-5">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
