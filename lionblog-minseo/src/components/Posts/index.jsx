import { Link } from 'react-router-dom';

const SmallPost = ({ post }) => {
  return (
    <div className="w-64 h-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
      <h1 className="font-extrabold text-2xl truncate">{post.title}</h1>
      <p className="mt-2">{post.author.username}</p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div>
        {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
      </div>
    </div>
  );
};
const BigPost = ({ post }) => {
  const handleBigPostLike = () => {
    alert("좋아요 누름");
  };
  const handleBigPostDelete = () => {
    alert("삭제 누름");
  };
  return (
    <div className="w-screen flex align-center justify-center">
    <div className="w-4/5 mt-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-none relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-1 border-box border-white bg-orange-400 text-black border-transparent ring-orange-200 rounded-xl font-medium">
        <div className="flex flex-row justify-between mb-5">
          <h1 className="font-extrabold text-2xl truncate inline">{post.author.username}의 {post.title}</h1>
          <span>{post.created_at.substring(0, 10)}</span>
        </div>
        <div className="border border-solid border-black rounded-md p-3">{post.content}</div>
        <div className="flex flex-wrap mt-5">
          {post.tags.map((tag) => (
            <span key={tag.id} className="tag m-1">
              #{tag.content}
            </span>
          ))}
        </div>
        <div className="hover:cursor-pointer" onClick={handleBigPostLike}>
          {post.like_users.length > 0 && `🖤 ${post.like_users.length}`}
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 justify-center mt-3 mb-7 w-full">
				<Link to={`/${post.id}/edit`} key={post.id}><button className="button mt-7">수정</button></Link>
				<button onClick={handleBigPostDelete} className="button mt-7">삭제</button>
			</div>
    </div>
    </div>
  );
};

export { SmallPost, BigPost };