import posts from "../data/posts";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const PostEditPage = () => {
  const modification = () => {
    alert("게시물을 수정합니다.");
  };

  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    post && (
      <div className="flex flex-col items-center w-1/2">
        <h3 className="font-bold text-2xl">게시글작성</h3>
        <form className="w-full flex flex-col gap-2" onSubmit={modification}>
          <label htmlFor="title" className="label">
            제목:
          </label>
          <input
            required
            defaultValue={post.title}
            type="text"
            id="title"
            className="input"
          />
          <label htmlFor="content" className="label">
            내용:
          </label>
          <textarea
            required
            defaultValue={post.content}
            type="text"
            id="content"
            className="border-2 border-white w-full h-80 px-6 py-3 text-wrap text-start rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
          <label htmlFor="tag" className="label">
            태그:
          </label>
          <div className="flex flex-row w-full items-center justify-between">
            <input
              type="text"
              placeholder="태그를 추가하세요."
              id="tag"
              className="border-2 border-white w-full px-6 py-3 rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent;"
            />
            <p className="w-20 px-5">추가</p>
          </div>
          <div className="flex flex-wrap mt-5">
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className="my-5 text-black bg-white p-2 text-xs rounded-2xl group-hover:bg-orange-200 group-hover:text-black hover:bg-orange-200 hover:text-black m-1"
              >
                #{tag.content}
              </span>
            ))}
          </div>
          <button type="submit" className="button">
            완료
          </button>
        </form>
      </div>
    )
  );
};

export default PostEditPage;
