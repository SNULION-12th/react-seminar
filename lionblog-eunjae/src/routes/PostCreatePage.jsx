const PostCreatePage = () => {
	const handlePostCreatePageSubmit = () => {
    alert("게시글을 등록합니다.") // TODO: add api call for sign up
  };
	return (
		<div className="flex flex-col items-center w-1/2">
	    <h3 className="font-bold text-2xl">게시글 작성</h3>
	    <form className="form gap-2" onSubmit={handlePostCreatePageSubmit}>
				<label required htmlFor="title" className="label">제목</label>
        <input required type="text" className="input" placeholder="제목을 입력해주세요."/>

        <label htmlFor="content" className="label">내용</label>
        <textarea required type="text" className="input h-64" placeholder="내용을 입력해주세요."/>

				<label required htmlFor="tag" className="label">태그</label>
        <input required type="text" className="input" placeholder="태그를 추가해주세요."/>

        <div className="flex flex-row items-center gap-5">
            <button type="submit" className="button mt-7">완료</button>
        </div>
	    </form>
		</div>
	);
};

export default PostCreatePage;
