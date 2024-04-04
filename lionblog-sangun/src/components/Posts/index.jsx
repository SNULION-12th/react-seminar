import { Link } from "react-router-dom";

const handleLikeButtonClick = () => {
  alert("좋아요");
  // TODO: 실제 삭제 동작 수행
};

export const SmallPost = ({ post }) => {
  return (
    <Link
      to={`/${post.id}`}
      className="w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium"
    >
      <h1 className="font-extrabold text-2xl truncate">{post.title}</h1>
      <p className="mt-2">{post.author.username}</p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div>{post.like_users.length > 0 && `❤️ ${post.like_users.length}`}</div>
    </Link>
  );
};

export const BigPost = ({ post }) => {
  return (
    <div className="w-[100%] block group py-10 px-8 my-5 ring-5 ring-transparent border-2 border-box hover:bg-black hover:text-white hover:border-white bg-orange-400 text-black ring-orange-200 rounded-xl font-medium">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="font-extrabold text-2xl truncate">
          {post.author.username}의 {post.title}
        </h1>
        <p className="mt-2">{post.created_at.slice(0, 10)}</p>
      </div>
      <input
        type="text"
        placeholder={`${post.id}번째 게시물입니다.`}
        className="w-[100%] h-12 mt-5 border-2 px-2 hover:placeholder-white placeholder-black text-black border-black hover:bg-black hover:border-white bg-orange-400 ring-orange-200 rounded-xl font-medium"
      />
      <div className="flex flex-wrap mt-2">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div onClick={handleLikeButtonClick} className="hover:cursor-pointer">
        {post.like_users.length > 0 && `♥︎ ${post.like_users.length}`}
      </div>
    </div>
  );
};
