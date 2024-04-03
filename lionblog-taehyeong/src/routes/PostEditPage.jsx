import { PostWriteTemplate } from "../components/PostWriteTemplate";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import posts from "../data/posts";
import { PostsDataContext } from "../App";

const PostEditPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const posts = useContext(PostsDataContext);

  useEffect(() => {
    const data = posts.find((post) => post && post.id === parseInt(postId));
    if (data) setPost(data);
  }, [post]);

  return post && <PostWriteTemplate initial={{ ...post }} mode="수정" />;
};

export default PostEditPage;
