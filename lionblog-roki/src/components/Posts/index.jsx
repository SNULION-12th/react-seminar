import { Link } from "react-router-dom"

export const SmallPost = ({ post }) => {
    return (
      <div className="w-64 relative block group h-56 py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
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

export const BigPost = ({ post }) => {
    return (
      <div className="w-5/6 relative block py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-yellow-200 bg-orange-400 text-black rounded-xl font-medium">
        <h1 className="font-extrabold text-2xl truncate">{post.author.username}의 {post.title}</h1>
        <div className="relative block py-1 px-1 mr-5 my-5 border-2 border-box border-black rounded-xl">{post.content}</div>
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

