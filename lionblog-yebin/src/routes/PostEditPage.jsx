import React, { useState, useEffect } from "react";
import posts from "../data/posts";
import { useParams } from "react-router-dom";

const PostEditPage = () => {
  let { postId } = useParams(); //only receives the variable

  const [post, setPost] = useState(null);
  const [originalPost, setOriginalPost] = useState(null);

  const handleEditSubmit = () => {
    alert("게시물을 수정합니다");
  };

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    const originalPost = { ...post, tags: post.tags.map((tag) => tag.content) };
    setPost(originalPost);
    setOriginalPost(originalPost);
  }, [postId]);

  return (
    post &&
    originalPost && (
      <div id="outermost" className="flex flex-col items-center w-1/2">
        <h3 className="font-bold text-2xl">게시글 수정</h3>
        <form className="form gap-2" onSubmit={handleEditSubmit}>
          <label htmlFor="title" className="label">
            제목
          </label>
          <input
            required
            type="text"
            id="title"
            className="input"
            value={post.title}
            placeholder="제목을 입력하세요"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />

          <label htmlfor="content" className="label">
            내용
          </label>
          <textarea
            required
            type="text"
            id="content"
            className="input h-52"
            value={post.content}
            placeholder="내용을 입력하세요"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />

          <label htmlFor="tags" className="label">
            태그
          </label>
          <input
            type="text"
            id="tags"
            className="input"
            placeholder="태그를 추가하세요"
          />

          <div id="tagtag" className="flex flex-row justify-start mt-2 mr-auto">
            {originalPost.tags.map((tag) => (
              <div>
                <span className="rounded-2xl bg-white text-black p-2.5 text-xs">
                  #{tag}
                </span>
                <button type="button" className="mx-2" data-close>
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-5">
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
