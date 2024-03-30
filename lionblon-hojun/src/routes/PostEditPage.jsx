import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { useEffect, useState } from "react";

const PostEditPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      {post && (
        <form
          className="form gap-2"
          onSubmit={() => {
            alert("게시글을 수정합니다");
          }}
        >
          <label required htmlFor="title" className="label">
            제목
          </label>
          <input
            required
            type="text"
            id="title"
            className="input"
            defaultValue={post.title}
          />

          <label htmlFor="content" className="label">
            내용
          </label>
          <textarea
            required
            id="content"
            className="input h-56"
            defaultValue={post.content}
          />

          <label htmlFor="tag" className="label">
            태그
          </label>

          <div className="flex w-full">
            <input id="tag" className="input" placeholder="태그를 추가하세요" />
            <button className="w-20">add</button>
          </div>
          <div className="flex justify-start w-full">
            {post.tags.map((tag) => (
              <div key={tag.id}>
                <span className="bg-white text-black rounded-2xl p-2 text-xs ml-2">
                  #{tag.content}
                </span>
                <span className="mt-1 ml-1">X</span>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-5">
            <button type="submit" className="button mt-7">
              완료
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PostEditPage;
