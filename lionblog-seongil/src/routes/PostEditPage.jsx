import posts from "../data/posts";
import { useParams } from "react-router-dom";
const PostEditPage = () => {
  const handleSignUpSubmit = () => {
    alert("수정 완료");
  };
  const postId = useParams().postId;
  const post = posts.find((post) => post.id === parseInt(postId));
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={handleSignUpSubmit}>
        <label required type="text" className="label">
          제목:
        </label>
        <input
          required
          value={post.title}
          type="text"
          id="title"
          className="input"
        />
        <label required className="label">
          내용:
        </label>
        <input
          className="h-64 input"
          value={post.content}
          required
          type="text"
          id="content"
        />
        <label required className="label">
          태그:
        </label>
        <input
          className="input"
          placeholder="태그를 추가하세요"
          required
          type="text"
          id="tag"
        />
        <div className="w-full flex flex-row justify-left flex-wrap mt-5">
          {post.tags.map((tag) => (
            <div className="gap-0.5">
              <span key={tag.id} className="tag m-1 -mr-px">
                #{tag.content}
              </span>
              <span className="tag text-xs">X</span>
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
  );
};

export default PostEditPage;
