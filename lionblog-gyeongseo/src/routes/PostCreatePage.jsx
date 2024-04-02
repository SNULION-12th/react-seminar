import posts from "../data/posts";

const PostCreatePage = () => {
  const handlePostCreateSubmit = () => {
    alert("게시글을 등록합니다.");
  };
  // const post = posts.find((post) => post.id === parseInt(postId));

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
      <form className="form gap-2" onSubmit={handlePostCreateSubmit}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeholder="제목을 입력하세요."
        />
        <label required htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          id="content"
          className="input"
          style={{ height: "250px" }}
          placeholder="내용을 입력하세요."
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex flex-row w-full fit-content justify-between">
          {/* justify-between 한참 찾았다!! */}
          <div className="w-full auto-rows-auto">
            <input
              required
              type="text"
              id="tags"
              className="input"
              placeholder="태그를 추가하세요"
            />
          </div>
          <div className="w-24 h-full items-center align-center text-center">
            add
          </div>
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

// minseo25
