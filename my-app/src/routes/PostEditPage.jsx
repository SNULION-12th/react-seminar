import posts from "../data/posts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostEditPage = () => {
  const handlePostSubmit = () => {
    alert("게시글을 수정합니다.");
  };

  const { postId } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    post &&
    post.tags && (
      <div className="flex flex-col items-center w-1/2">
        <div className="font-bold text-2xl">게시글 수정</div>
        <form className="form gap-2" onSubmit={handlePostSubmit}>
          <label required htmlFor="title" className="label">
            제목:
          </label>
          <textarea
            required
            type="text"
            id="title"
            className="input"
            defaultValue={post.title}
          />

          <label required htmlFor="content" className="label">
            내용:
          </label>
          <textarea
            required
            id="content"
            className="input h-56"
            defaultValue={post.content}
          />

          <label htmlFor="tag" className="label">
            태그:
          </label>
          <div className="flex w-full">
            <input
              id="tag"
              className="input"
              placeholder="태그를 추가하세요."
            />
            <button className="w-12">add</button>
          </div>

          <div className="flex justify-start w-full">
            {post.tags.map((tag) => (
              <div key={tag.id} className="flex items-center">
                <span className="bg-slate-300 rounded-3xl text-black p-2 m-1">
                  #{tag.content}
                </span>
                <button className="mt-1 ml-1">X</button>
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
