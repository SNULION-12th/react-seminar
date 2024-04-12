import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/posts";

const PostEditPage = () => {
  let { postId } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    const originalPost = { ...post, tags: post.tags.map((tag) => tag.content) };
    setPost(originalPost);
  }, [postId]);

  const handleEditPage = () => {
    alert("게시글을 수정합니다.");
  };

  return (
    post && (
      <div className="flex flex-col items-center w-1/2">
        <h3 className="font-bold text-2xl">게시글 수정</h3>
        <form className="form gap-2" onSubmit={handleEditPage}>
          <label htmlFor="title" className="label">
            제목
          </label>
          <input
            required
            type="text"
            id="title"
            className="input"
            defaultValue={`${post.title}`}
            placeHolder="제목을 입력하세요"
          />

          <label htmlFor="content" className="label">
            내용
          </label>
          <textarea
            required
            type="text"
            id="content"
            className="input"
            defaultValue={`${post.content}`}
            placeHolder="내용을 입력하세요"
          />

          <label htmlFor="tags" className="label">
            태그
          </label>
          <div className="w-full flex justify-between mb-2">
            <input
              type="text"
              id="tags"
              className="input w-auto"
              placeHolder="태그를 추가하세요"
            />
            <button className="w-20">추가</button>
          </div>
          <div className="w-full flex justify-start gap-4">
            {post.tags.map((tag) => (
              <div className="flex">
                <div className="bg-white text-black rounded-full p-2 mr-2">
                  #{tag}
                </div>
                <button>X</button>
              </div>
            ))}
          </div>

          <button type="submit" className="button mt-7 mb-5">
            완료
          </button>
        </form>
      </div>
    )
  );
};

export default PostEditPage;
