import posts from '../data/posts';
import { useParams } from 'react-router-dom';

const PostEditPage = () => {
	const handlePostEditHandler = () => {
    alert("게시물을 수정했습니다.");
  };
	const { postId } = useParams();
	const post = posts.find((post) => post.id === parseInt(postId));

	return (
		<div className="flex flex-col items-center w-3/4">
			<h3 className="font-bold text-2xl">게시물 수정</h3>
			<form className="form gap-2" onSubmit={handlePostEditHandler}>
				<label required htmlFor="title" className="label">제목</label>
        <input required type="text" id="title" className="input" value={post.title} />

        <label htmlFor="content" className="label">내용</label>
        <textarea required type="text" id="content" className="input" rows="9" value={post.content} />

				<label htmlFor="college" className="label">태그</label>
				<div className="w-full flex flex-row">
					<input type="text" id="college" className="input" placeholder="태그를 추가하세요" />
					<div className="w-24 ml-2 flex items-center justify-center hover:cursor-pointer">추가</div>
				</div>
				<div className="w-full flex flex-row gap-3">
					{post.tags.map((tag) => (
						<span className="mt-2">
							<span key={tag.id} className="bg-white text-black p-2 rounded-2xl">
								{tag.content}
							</span>
							<span>❌</span>
						</span>
					))}
				</div>

        <div className="flex flex-row items-center gap-5">
					<button type="submit" className="button mt-7">완료</button>
        </div>
	    </form>
		</div>
	);
};

export default PostEditPage;