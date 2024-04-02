import { Link } from "react-router-dom";

export const SmallPost = ({ post }) => {
  const onClickLike = () => {};
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
  const onClickLike = () => {
    alert("좋아요");
  };
  return (
    <div className="py-3 w-full bg-orange-400 text-black border-0 ring-4 ring-orange-200 rounded-xl font-medium">
      <div className="px-8">
        <h1 className="font-extrabold text-2xl">
          {post.author.username}의 {post.title}
        </h1>
        <div className="mt-2 h-16 border-box border-2 rounded-xl border-black">
          {post.content}
        </div>
        <div className="flex mt-5">
          {post.tags &&
            post.tags.map((tag) => (
              <span key={tag.id} className="tag mr-2">
                #{tag.content}
              </span>
            ))}
        </div>
        <div className="flex mt-5 cursor-pointer" onClick={onClickLike}>
          ❤️ {post.like_users.length}
        </div>
      </div>
    </div>
  );
};
