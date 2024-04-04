import { useState } from "react";
import { Link } from "react-router-dom";
import postsData from "../data/posts";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object
    const newPost = {
      id: postsData.length + 1,
      title: title,
      content: content,
      author: { id: 1, username: "User" }, // You can set the author as needed
      tags: tags.split(",").map((tag, index) => ({ id: index + 1, content: tag.trim() })),
      like_users: [],
      created_at: new Date().toISOString(),
    };

    // Update the posts data
    const updatedPostsData = [...postsData, newPost]; // Copy the existing array and add the new post
    localStorage.setItem("posts", JSON.stringify(updatedPostsData));

    // Redirect to the homepage
    window.location.href = "/"; // Navigate to the homepage
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 작성</h3>
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

export default PostCreatePage;
