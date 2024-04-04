import { BigPost } from "../components/posts";
import {Link} from "react-router-dom"
import posts from "../data/posts";
import { usePostContext } from "../routes/postContext";

const PostDetailPage = () => {
  const { selectedPost } = usePostContext(); // Get selectedPost from context

  return (
    <>
    <div>
      {selectedPost && <BigPost post={selectedPost} />} {}
    </div>
            <div className="flex flex-row items-center gap-5">
            <Link to="/post-edit" className="button mt-7">
              수정
            </Link>
            <button type="submit" className="button mt-7">
              삭제
            </button>
          </div>
          </>
  );
};

export default PostDetailPage;
