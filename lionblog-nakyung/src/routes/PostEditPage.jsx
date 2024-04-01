import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/posts";

const PostEditPage = () => {
  const postId = useParams().postId;
  const post = posts.find((post) => post.id === parseInt(postId));
  const originalPost = { ...post, tags: post.tags.map((tag) => tag.content) };

  const handleEditSubmit = () => {
    alert("게시물을 수정합니다."); // TODO: add api call for sign up
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={handleEditSubmit}>
        <label required className="label" htmlFor="title">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          defaultValue={post.title}
          className="input"
        />
        <label required className="label" htmlFor="contents">
          내용
        </label>
        <input
          required
          type="text"
          id="contents"
          defaultValue={post.content}
          className="input h-60"
        />
        <label required className="label">
          태그
        </label>
        <input
          type="text"
          id="tags"
          placeholder="태그를 추가하세요"
          className="input"
        />

        <div className="flex justify-start w-full mt-5">
          {post.tags.map((tag) => (
            <div key={tag.id}>
              <span key={tag.id} className="tag m-1 bg-white text-black">
                #{tag.content}
              </span>
              <span className="mt-1 ml-1">X</span>
            </div>
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
