import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostEditPage = () => {
  const handlePostEdit = () => {
    alert("게시글을 수정합니다.");
  };
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2">
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          placeholder="제목을 입력하세요"
          defaultValue={post.title}
        />

        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          required
          type="text"
          id="content"
          className="input"
          style={{ height: "200px", paddingBottom: "150px" }}
          placeholder="내용을 입력하세요"
          defaultValue={post.content}
        />

        <label htmlFor="tag" className="label">
          태그
        </label>
        <input
          required
          type="text"
          id="tag"
          className="input align-top"
          placeholder="태그를 추가하세요"
        />
        <div className="mt-2 flex w-full">
          {post.tags.map((tag) => (
            <div key={tag.id} className="flex items-center mr-3">
              <span className="rounded-full py-2 px-5 bg-white text-black font-semibold">
                #{tag.content}
              </span>
              <span className="ml-2">X</span>
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-5">
          <button
            type="submit"
            className="button mt-7"
            onClick={handlePostEdit}
          >
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEditPage;
