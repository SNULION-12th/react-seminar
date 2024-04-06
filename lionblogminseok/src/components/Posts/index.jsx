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
  const handledelete = () => {
    alert("삭제");
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" w-1/2 relative block group py-10 px-8 text-black  ring-8 ring-transparent border-2 border-box border-white bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
        <div className="flex justify-between mb-5">
          <h1 className="flex justify-center font-extrabold text-2xl truncate">
            {post.author.username}의 {post.title}
          </h1>
          <div>{post.created_at.slice(0, 10)}</div>
        </div>

        <div className="flex justify-start rounded-lg border-black text-black border-2">
          {post.content}
        </div>

        <div className="flex  justify-start flex-wrap mt-5">
          {post.tags.map((tag) => (
            <span key={tag.id} className="tag m-1">
              #{tag.content}
            </span>
          ))}
        </div>
        <div className="flex justify-start" onClick={handledelete}>
          {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Link to={`/${post.id}/edit`} className="button mt-7">
          수정
        </Link>
        <button type="submit" className="button mt-7" onClick={handledelete}>
          삭제
        </button>
      </div>
    </div>
  );
};
