import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const handleEditSubmit = () => {
  alert("게시글을 수정합니다.");
};

const PostEditPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [],
  });

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === parseInt(postId));
    if (foundPost) {
      const originalPost = {
        ...foundPost,
        tags: foundPost.tags.map((tag) => tag.content),
      };
      setPost(originalPost);
    }
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleAddTag = () => {
    const tagInput = document.getElementById("tags");
    const newTag = tagInput.value.trim();
    if (newTag !== "") {
      setPost((prevPost) => ({
        ...prevPost,
        tags: [...prevPost.tags, newTag],
      }));
      tagInput.value = "";
    }
  };
  const handleRemoveTag = (indexToRemove) => {
    setPost((prevPost) => ({
      ...prevPost,
      tags: prevPost.tags.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={handleEditSubmit}>
        <label htmlFor="title" className="label">
          제목:
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          id="title"
          name="title"
          className="input"
          value={post.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="content" className="label">
          내용:
        </label>
        <textarea
          placeholder="내용을 입력하세요"
          id="content"
          name="content"
          cols="30"
          rows="10"
          className="input"
          value={post.content}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="tags" className="label">
          Tags
        </label>
        <div className="flex  w-full gap-x-5">
          <input
            type="text"
            placeholder="태그를 추가하세요"
            id="tags"
            className="input grow"
          />
          <button
            type="button"
            className="small-button w-16"
            onClick={handleAddTag}
          >
            추가
          </button>
        </div>
        <div className="flex flex-wrap mt-2 ">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag m-2">
              {tag}
              <span
                className="tag-remove"
                onClick={() => handleRemoveTag(index)}
              >
                &#10006;
              </span>
            </span>
          ))}
        </div>
        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostEditPage;
