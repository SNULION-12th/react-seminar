import { Link } from "react-router-dom";

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
  const handleLike = () => {
    alert("좋아요");
  };

  return (
    <div className="w-full relative block group py-10 px-5 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
      <h1 className="mb-8 font-extrabold text-2xl truncate">
        {post.author.username}의 {post.title}
      </h1>
      <p className="py-5 px-3 mt-2 ring-8 ring-transparent rounded-xl border-2 border-box border-white">
        {post.content}
      </p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <button onClick={handleLike}>
        {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
      </button>
    </div>
  );
};
