const PostCreatePage = () => {
	const createSubmit = () => {
    alert("게시물 작성이 완료되었습니다.") // TODO: add api call for sign up
  };

  return (
    <div className="flex flex-col items-center w-1/2">
	    <h3 className="font-bold text-2xl">게시글 작성</h3>
	    <form className="form flex-row" onSubmit={createSubmit}>
        <label htmlFor="title" className="label">제목</label>
        <input required type="text" id="title" className="input" placeholder="제목을 입력하세요" />

				<label htmlFor="contents" className="label">내용</label>
        <textarea required type="text" id="contents" className="input h-64" placeholder="내용을 입력하세요"/>

        <label htmlFor="tags" className="label">태그</label>
				<div className="flex flex-row w-full content-between">
					<input type="tag" id="tags" className="input" placeholder="태그를 추가하세요"/>
					<button type="button" className="w-20">추가</button>
				</div>
        <button type="submit" className="button mt-7 items-center">완료</button>
	    </form>
		</div>
  );
};

export default PostCreatePage;