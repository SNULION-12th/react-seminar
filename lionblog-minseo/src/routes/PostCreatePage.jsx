const PostCreatePage = () => {
	const handlePostCreateSubmit = () => {
    alert("게시물을 등록합니다");
  };
	return (
		<div className="flex flex-col items-center w-3/4">
			<h3 className="font-bold text-2xl">게시물 작성</h3>
			<form className="form gap-2" onSubmit={handlePostCreateSubmit}>
				<label required htmlFor="title" className="label">제목</label>
        <input required type="text" id="title" className="input" placeholder="제목을 입력하세요" />

        <label htmlFor="content" className="label">내용</label>
        <textarea required type="text" id="content" className="input" rows="9" placeholder="내용을 입력하세요" />

				<label htmlFor="college" className="label">태그</label>
				<div className="w-full flex flex-row">
					<input type="text" id="college" className="input" placeholder="태그를 추가하세요" />
					<div className="w-24 ml-2 flex items-center justify-center hover:cursor-pointer">추가</div>
				</div>

        <div className="flex flex-row items-center gap-5">
					<button type="submit" className="button mt-7">완료</button>
        </div>
	    </form>
		</div>
	);
};

export default PostCreatePage;