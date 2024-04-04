import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePostContext } from "../routes/postContext";

const PostEditPage = () => {
  const { selectedPost } = usePostContext(); // Access selectedPost from the context
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (selectedPost) {
      // If the selectedPost is available, pre-fill the form fields
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setTags(selectedPost.tags.map((tag) => tag.content).join(", "));
    }
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and update the post
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={handleSubmit}>
        <label htmlFor="title" className="label">
          *제목:
        </label>
        <input required type="text" id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="content" className="label">
          *내용:
        </label>
        <input required type="text" id="content" className="input" value={content} onChange={(e) => setContent(e.target.value)} />

        <label htmlFor="tags" className="label">
          태그 (쉼표로 구분):
        </label>
        <input type="text" id="tags" className="input" value={tags} onChange={(e) => setTags(e.target.value)} />

        <div className="flex flex-row items-center gap-5">
          <button type="submit" className="button mt-7">
            완료
          </button>
          <Link to="/" className="button mt-7">
            취소
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PostEditPage;
