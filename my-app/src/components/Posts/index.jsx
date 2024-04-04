export const SmallPost = ({ post }) => {
  return (
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
      <div>{post.like_users.length > 0 && `❤️ ${post.like_users.length}`}</div>
    </div>
  );
};

export const BigPost = ({ post }) => {
  const handleLikes = () => {
    alert("좋아요를 눌렀습니다");
  };
  return (
    <div className="w-96 py-10 px-8 ring-8 ring-transparent border-4 border-box border-orange-300 rounded-xl font-medium bg-orange-400 text-black">
      <div className="flex justify-between mb-5">
        <h1 className="font-extrabold text-2xl truncate">
          {post.author.username}의 {post.title}
        </h1>
        <h2>{post.created_at.substr(0, 10)}</h2>
      </div>
      <div className="w-full border-2 border-black rounded-lg p-2">
        {post.content}
      </div>
      <div className="flex flex-wrap mt-5 mb-3">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <button onClick={handleLikes}>
        {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
      </button>
    </div>
  );
};
