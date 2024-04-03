import posts from "../data/posts";
import { useNavigate, useParams } from "react-router-dom";

const PostEditPage = () => {
	const params = useParams();
	const post = posts.find((post) => post.id === parseInt(params.postId));
	const nav = useNavigate();
	const handlePostEditPageSubmit = () => {
    alert("게시글을 수정합니다.") 
		nav(`/${post.id}`)
  };
	
	return (
		<div className="flex flex-col items-center w-1/2">
	    <h3 className="font-bold text-2xl">게시글 작성</h3>
	    <form className="form gap-2" onSubmit={handlePostEditPageSubmit}>
				<label required htmlFor="title" className="label">제목</label>
        <input required type="text" className="input" defaultValue={post.title}/>

        <label htmlFor="content" className="label">내용</label>
        <textarea required type="text" className="input h-64" defaultValue={post.content}/>

				<label required htmlFor="tag" className="label">태그</label>
        <input required type="text" className="input" placeholder="태그를 추가해주세요."/>
				<div className="flex justify-start w-full">
          {post.tags.map((tag) => (
            <div key={tag.id}>
              <span className="bg-white text-black rounded-2xl p-2 text-xs ml-2">
                #{tag.content}
              </span>
              <span className="mt-2 ml-1 mr-1">X</span>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center gap-5">
            <button type="submit" className="button mt-7">완료</button>
        </div>
	    </form>
		</div>
	);
};

export default PostEditPage;
