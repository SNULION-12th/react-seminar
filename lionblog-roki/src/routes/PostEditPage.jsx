import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { useEffect, useState } from "react";

const PostEditPage = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const post = posts.find((post) => post.id === parseInt(postId));
		setPost(post);
	}, [postId]);

	const handleEdit = () => {
		alert("게시물을 수정합니다.");
	};

	return (
		post && (
			<div className="flex flex-col items-center w-1/2">
			<h3 className="font-bold text-2xl">게시글 수정</h3>
			<form className="form gap-2" onSubmit={handleEdit}>
				<label required htmlFor="title" className="label">제목</label>
				<input required type="text" id="title" className="input" defaultValue={post.title}/>

				<label required htmlFor="content" className="label">내용</label>
				<input required type="text" id="content" className="input h-72" defaultValue={post.content}/>


				<label htmlFor="tag" className="label">태그</label>
				<div className="flex w-full">
					<input type="text" id="tag" className="input" />
					<button type="reset" className="mt-1 ml-1">add</button>
				</div>
				<div className="flex justify-start">
					{post.tags.map((tag) => (
              			<div key={tag.id} className="flex items-center">
                			<span className="bg-white rounded-3xl text-black p-2 m-1">
                  				#{tag.content}
                			</span>
                			<button type="reset">X</button>
						</div>
					))}
				</div>
				<div className="flex flex-row items-center gap-5">
					<button type="submit" className="button mt-7">완료</button>
				</div>
	    	</form>
		</div>
		)
	);
};

export default PostEditPage;