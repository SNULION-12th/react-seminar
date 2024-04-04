import { BigPost } from "../components/posts";
import posts from "../data/posts";
import { usePostContext } from "../routes/postContext";

const PostDetailPage = () => {
  const { selectedPost } = usePostContext(); // Get selectedPost from context

  return (
    <div>
      {selectedPost && <BigPost post={selectedPost} />} {}
    </div>
  );
};

export default PostDetailPage;
