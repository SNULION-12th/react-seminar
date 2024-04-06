import { PostWriteTemplate } from "../components/PostWriteTemplate";

const PostCreatePage = () => {
  return (
    <PostWriteTemplate
      initial={{
        id: 0,
        title: "",
        content: "",
        author: { id: 0, username: "" },
        tags: [],
        like_users: [],
        created_at: "",
      }}
      mode="작성"
    />
  );
};

export default PostCreatePage;
