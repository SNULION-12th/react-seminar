import { PostCUTemplate } from "../components/PostCUTemplate";

const PostCreatePage = () => {
  return (
    <PostCUTemplate
      initial={{
        id: 0,
        title: "",
        content: "",
        author: { id: 0, username: "" },
        tags: [],
        like_users: [],
        created_at: "",
      }}
    />
  );
};

export default PostCreatePage;
