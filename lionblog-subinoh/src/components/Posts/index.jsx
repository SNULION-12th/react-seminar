import { Link } from "react-router-dom"

const LikePost = () => {
  alert("좋아요!");
}

export const SmallPost = ({ post }) => {
  return (
    <div className="w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
      <Link to={`/${post.id}`} className="post-link">
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
      </Link>
    </div>
  );
};

export const BigPost = ({ post }) => {
  return (
    <div className="w-192 relative block py-6 px-8 mx-5 my-5 border-2 border-orange-200 border-box bg-orange-400 rounded-xl font-medium">
      <div className="flex flex-row text-black justify-between items-center">
        <h2 className="font-bold text-2xl">{post.author.username}의 {post.title}</h2>
        <p className="mt-3">{post.created_at.split("T")[0]}</p>
      </div>
      <p className="border border-black text-black my-4 rounded-xl py-1 px-3">{post.content}</p>
      <div>
        {post.tags.map((tag) => (
          <span key={tag.id} className="text-white bg-black p-2 text-xs rounded-2xl mx-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div className="mt-3 cursor-pointer pt-5" onClick={LikePost}>❤️ {post.like_users.length}</div>
    </div>  
  );
};