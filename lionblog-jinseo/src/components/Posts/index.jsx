import { Link, useParams } from "react-router-dom";

export const SmallPost = ({ post }) => {
  return (
    <Link
      to={`${post.id}`}
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
    <div className="w-full py-7 px-8 my-5 border-2 border-box border-white rounded-xl font-medium bg-orange-400">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl truncate text-black">
          {post.author.username}의 {post.title}
        </h1>
        <p className="text-black">{post.created_at.substr(0, 10)}</p>
      </div>
      <p className="px-2 mt-2 border-zinc-950 border-2 border-box border-black rounded-xl text-black">
        {post.content}
      </p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div onClick={() => alert("좋아요")}>
        {" "}
        {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
      </div>
    </div>
  );
};
