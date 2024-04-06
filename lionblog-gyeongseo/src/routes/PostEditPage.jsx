import { useLocation } from "react-router-dom";
import posts from "../data/posts";

const PostEditPage = () => {
  const handlePostEditSubmit = () => {
    alert("수정 완료");
  };
  const location = useLocation();
  const postId = location.state.postId;

  // useEffect(() => {
  const post = posts.find((post) => post.id === parseInt(postId));
  //   setPost(post);
  // }, [postId]);
  // useEffect가 오히려 에러 유발해서 제거.
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">게시글 수정</h3>
      <form className="form gap-2" onSubmit={handlePostEditSubmit}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          required
          type="text"
          id="title"
          className="input"
          defaultValue={post ? post.title : ""}
        />

        <label required htmlFor="content" className="label">
          내용
        </label>
        <textarea
          required
          type="text"
          id="content"
          className="input"
          style={{ height: "250px" }}
          defaultValue={post ? post.content : ""}
        />

        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex flex-row w-full fit-content justify-between">
          {/* justify-between 한참 찾았다!! */}
          {/* 너비가 이상하면 w-full */}
          <div className="w-full auto-rows-auto">
            <input
              required
              type="text"
              id="tags"
              className="input"
              placeholder="태그를 추가하세요"
            />
          </div>
          <div className="w-24 h-full items-center align-center text-center">
            add
          </div>
          {/* add가 정중앙에 배치되지 않는데 왜 이러지? */}
        </div>

        <div className="w-full justify-start">
          <div className="flex flex-wrap mt-5">
            {post.tags &&
              post.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="bg-white text-black rounded-md mx-2 px-2 py-2 "
                  // 버튼 처리 어렵다.
                >
                  #{tag.content}
                </div>
              ))}
          </div>
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
