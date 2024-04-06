import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import posts from "../data/posts";

const PostEditPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    const originalPost = { ...post };
    setPost(originalPost);
  }, [postId]);

  const editHandler = () => {
    alert("게시물을 수정합니다.");
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={editHandler}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          className="input"
          placeholder="제목을 입력하세요"
          value={post && post.title}
          id="title"
        />

        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          className="input h-72"
          placeholder="내용을 입력하세요"
          value={post && post.content}
          id="content"
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex flex-row w-full justify-between">
          <input className="input w-10/12" placeholder="태그를 추가하세요" />
          <span className="w-1/6 pt-2 text-center align-middle">추가</span>
        </div>
        <div className="flex flex-row self-start">
          {post &&
            post.tags.map((tag) => (
              <div className="flex flex-row mr-3 mt-3">
                <div className=" text-black bg-white p-2 text-xs rounded-2xl group-hover:bg-orange-200 group-hover:text-white hover:bg-orange-200 hover:text-white;">{`#${tag.content}`}</div>
                <button type="button" className="text-[14px] ml-2">
                  X
                </button>
              </div>
            ))}
        </div>
        <div>
          <button type="submit" className="button mt-10 mb-3">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEditPage;
