const PostCreatePage = () => {
	const handlePostCreate = () => {
		alert("게시글을 등록합니다.");
	};
	return (
		<div className="flex flex-col items-center w-1/2">
			<h3 className="font-bold text-2xl">게시글 작성</h3>
			<form className="form gap-2" onSubmit={handlePostCreate}>
				<label required htmlFor="title" className="label">제목</label>
				<input required type="text" id="title" className="input" />

				<label required htmlFor="content" className="label">내용</label>
				<input required type="text" id="content" className="input h-72" />

				<label htmlFor="tag" className="label">태그</label>
				<div className="flex w-full">
					<input type="text" id="tag" className="input" />
					<button type="reset" className="mt-1 ml-1">add</button>
				</div>
				
				<div className="flex flex-row items-center gap-5">
					<button type="submit" className="button mt-7">완료</button>
				</div>
	    	</form>
		</div>
	);
};

export default PostCreatePage;