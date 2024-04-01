import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostEditPage = () => {
	const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("게시물이 수정되었습니다.");
  };

  return (
		<div className="flex flex-col items-center w-1/2">
			<h3 className="font-bold text-2xl">게시물 수정</h3>
			<form className="form flex-row" onSubmit={handleSubmit}>
				<label htmlFor="title" className="label">제목</label>
				<input required type="text" id="title" className="input" defaultValue={post.title}/>

				<label htmlFor="contents" className="label">내용</label>
				<textarea required type="text" id="contents" className="input h-64" defaultValue={post.content}/>

				<label htmlFor="tags" className="label">태그</label>
				<div className="flex flex-row w-full content-between">
					<input type="tag" id="tags" className="input" placeholder="태그를 추가하세요"/>
					<button type="button" className="w-18 ml-3">add</button>
				</div>
				<div className="flex w-full">
					{post.tags.map((tag) => {
						return (
						<div className="flex-row flex mt-5">
							<div key={tag.id} className="text-black bg-white p-2 text-xs rounded-2xl mx-1">
								#{tag.content}
							</div>
							<button type="button" className="mx-1">x</button>
						</div>
						);
					})}
				</div>
				<button type="submit" className="button mt-7 flex flex-row items-center">완료</button>
			</form>
		</div>
  );
};

export default PostEditPage;
