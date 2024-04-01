import { Link } from "react-router-dom";

export const SmallPost = ({ post }) => {
  return (
    <Link to={`/${post.id}`}>
      <div className="w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
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
    </Link>
  );
};

export const BigPost = ({ post, date }) => {
  return (
    <article className="py-10 px-8 mr-5 my-5 w-full bg-orange-400 ring-8 ring-transparent border-2 border-box border-white rounded-xl text-black">
      <div className="flex flex-row justify-between mb-4 items-center">
        <span className="text-3xl font-bold">
          {post.author.username}의 {post.title}
        </span>
        <span>{date}</span>
      </div>
      <input className="post-content mb-4 " defaultValue={post.content}></input>
      <div className="flex flex-row flex-wrap">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <span>❤️ {post.like_users.length}</span>
    </article>
  );
};
