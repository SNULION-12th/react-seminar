import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { useState, useEffect } from "react";

const PostEditPage = () => {
  const postId = useParams().postId;
  const handleSignUpSubmit4 = () => {
    alert("게시물을 수정합니다.");
  };

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  const removeTag = (tagId) => {
    const updatedTags = post.tags.filter((tag) => tag.id !== tagId);
    setPost((prevPost) => ({
      ...prevPost,
      tags: updatedTags,
    }));
  };

  return (
    post && (
      <div className="w-1/2">
        <h3 className="font-bold text-2xl flex justify-center">게시글 수정</h3>
        <form onSubmit={handleSignUpSubmit4} className="">
          <label htmlFor="text" className="label">
            제목
          </label>
          <textarea
            required
            type="text"
            id="text"
            className="mt-1.5 input h-12 mb-4"
            defaultValue={post.title}
          />

          <label htmlFor="content" className="label mt-4">
            내용
          </label>
          <textarea
            required
            id="content"
            className="mt-1.5 input h-96 resize-none placeholder-opacity-0 placeholder-top mb-4"
            defaultValue={post.content}
          ></textarea>

          <label htmlFor="text" className="label mt-4">
            태그
          </label>
          <div className="flex flex-grow w-full">
            <textarea
              type="text"
              id="text"
              className="input h-12 flex-row mt-1.5"
              placeholder="태그를 추가하세요"
            />
            <button className="w-20">add</button>
          </div>

          <div className="flex mt-5">
            {post.tags.map((tag) => (
              <span key={tag.id} className="tag-container">
                <span
                  className="tag"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  #{tag.content}
                </span>
                <span
                  className="remove-tag m-2"
                  onClick={() => removeTag(tag.id)}
                >
                  X
                </span>
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5">
            <button type="submit" className="button mt-7">
              완료
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default PostEditPage;
