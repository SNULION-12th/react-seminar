import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import posts from "../data/posts";

const PostEditPage = () => {
  const handleModifySubmit = () => {
    alert("게시물을 수정합니다."); // TODO: add api call for sign in
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
        <h3 className="font-bold text-2xl">게시글 수정</h3>
        <form className="form gap-2" onSubmit={handleModifySubmit}>
          <label required htmlFor="title" className="label">
            제목:
          </label>
          <input
            required
            type="text"
            id="title"
            className="input"
            defaultValue={post.title}
          />

          <label htmlFor="content" className="label">
            내용:
          </label>
          <textarea
            required
            type="text"
            id="content"
            wrap="soft"
            className="input pt-0 h-56"
            defaultValue={post.content}
          />

          <label htmlFor="tag" className="label">
            태그:
          </label>
          <div className="flex w-full">
            <input id="tag" className="input" placeholder="태그를 추가하세요" />
            <button type="button" className="w-20">
              add
            </button>
          </div>
          <div className="flex justify-start w-[100%]">
            {post.tags.map((tag) => (
              <div key={tag.id} className="flex items-center">
                <div
                  className="tag m-1"
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  #{tag.content}
                </div>
                <div className="hover:cursor-pointer">×</div>
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
