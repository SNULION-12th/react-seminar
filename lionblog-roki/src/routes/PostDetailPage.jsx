import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { BigPost } from "../components/Posts";
import posts from "../data/posts";

const PostDetailPage = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const post = posts.find((post) => post.id === parseInt(postId));
		setPost(post);
	}, [postId]);
	const handleDelete = () => {
		alert("삭제");
	};
	
	return(
		<div className="w-5/6">
			<div className="flex justify-center">
				{post &&<BigPost key={post.id} post={post} />}
			</div>
			<div className="flex flex-row justify-center gap-5 mb-5">
				<Link to="edit" className="button mt-7">
					수정
				</Link>
				<button className="button mt-7" onClick={handleDelete}>
					삭제
				</button>
			</div>
		</div>
	);
};


export default PostDetailPage;