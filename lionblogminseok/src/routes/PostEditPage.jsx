import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/Posts";

function PostEditPage() {
  const handleSubmit = () => {
    alert("게시글을 수정합니다."); // TODO: add api call for sign up
  };
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));

  return (
    <div className="flex justify-center ">
      {post && (
        <div className="w-3/5 ">
          <div className="flex justify-center">
            <h3 className="font-bold text-2xl">게시글 수정</h3>
          </div>

          <form className="form gap-2" onSubmit={handleSubmit}>
            <label required htmlFor="title" className="label">
              제목
            </label>
            <input
              required
              type="text"
              id="title"
              className="input mb-3"
              placeholder="제목을 입력하세요"
              defaultValue={post.title}
            />
            <label required htmlFor="content" className="label">
              내용
            </label>
            <textarea
              required
              type="text"
              id="content"
              className="input h-64 Placeholder-top"
              placeholder="내용을 입력하세요"
              defaultValue={post.content}
            />
            <label required htmlFor="tag" className="label">
              태그
            </label>
            <div className="flex flex-row w-full">
              <input
                id="tag"
                className="input "
                placeholder="태그를 추가하세요"
              />
              <button className="w-20">추가</button>
            </div>

            <div className="flex w-full">
              {post.tags.map((tag) => (
                <div key={tag.id} className="m-1">
                  <span className="bg-white text-black rounded-2xl m-1 p-2">
                    #{tag.content}
                  </span>
                  <span>X</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button type="submit" className="button mt-7">
                완료
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostEditPage;
