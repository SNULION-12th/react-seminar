import { BigPost } from '../components/Posts';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

const PostDetailPage = () => {
	const { postId } = useParams();
	const post = posts.find((post) => post.id === parseInt(postId));

	return (
		<div>
			<BigPost key={post.id} post={post} />
		</div>
	);
};

export default PostDetailPage;