export const SmallPost = ({ post }) => {
  return (
    <div className="w-64 h-60 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
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
  if (!post) {
    return null; // Or you can render a placeholder or loading indicator
  }

  const handleLike = () => {
    alert("좋아요를 눌렀습니다");
  };

  return (
    <div className="w-full relative block group py-8 px-8 mr-5 my-1 border-4 border-box border-orange-300 bg-orange-400 ring-orange-200 rounded-xl font-medium">
      <div className="flex flex-row justify-between text-black">
        <h1 id="postTitle" className="font-bold text-2xl truncate text-black">
          {post.author.username}의 {post.title}
        </h1>
        <h2 id="post_date">{post.created_at.substring(0, 10)}</h2>
      </div>
      <p className="text-black border-2 rounded-lg border-black p-2 mt-4">
        {post.content}
      </p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <button className="text-black mt-4" onClick={handleLike}>
        {post.like_users.length > 0 && `♥︎ ${post.like_users.length}`}
      </button>
    </div>
  );
};
