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

  const handlePostEdit = () => {
    alert("게시물을 수정합니다.");
  };
 
  return (
    post && (
      <div className="flex flex-col items-center w-1/2">
        <h3 className="font-bold text-2xl">게시글 수정</h3>
        <form className="form gap-2" onSubmit={handlePostEdit}>
          <label htmlFor="title" className="label">
            제목
          </label>
          <textarea
            required
            type="text"
            id="title"
            className="input"
            defaultValue={post.title}
          />

          <label required htmlFor="content" className="label">
            내용
          </label>
          <textarea
            required
            type="text"
            id="content"
            className="input h-64"
            defaultValue={post.content}
          />

          <label htmlFor="tag" className="label">
            태그
          </label>
          <input
            type="text"
            id="tag"
            className="input"
            placeholder="태그를 추가하세요"
          />
          <div className="flex flex-wrap mt-5 justify-start">
            {post.tags.map((tag) => (
              <div key={tag.id} className="flex items-center">
                <span className="bg-slate-300 rounded-3xl text-black p-2 m-1">
                  #{tag.content}
                </span>
                <button className="mt-1 ml-1">
                  X
                </button>
              </div>
            ))}
          </div>
          <button className="button mt-7">완료</button>
        </form>
      </div>
    )
  );
};

export default PostEditPage;
