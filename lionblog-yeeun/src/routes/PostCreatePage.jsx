const PostCreatePage = () => {
  const handlePostCreate = () => {
    alert("게시글을 등록합니다.");
  };
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handlePostCreate}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input required type="text" id="title" className="input" placeholder="제목을 입력하세요"/>

        <label required htmlFor="content" className="label">
          내용
        </label>
        <textarea required type="text" id="content" className="input h-64" placeholder="내용을 입력하세요"/>

        <label htmlFor="tag" className="label">
          태그
        </label>
        <input type="text" id="tag" className="input" placeholder="태그를 추가하세요" />
        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
