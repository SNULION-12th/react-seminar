export const SmallPost = ({ post }) => {
  return (
    <div className="w-64 h-56 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
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
  const handleLikeClick = () => {
    alert("좋아요");
  };
  return (
    <div className="w-2/3 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-4 border-box border-orange-200 bg-orange-400 text-black rounded-xl font-medium">
      <h1 className="absolute font-semibold text-2xl top-6 left-8 truncate">
        {post.author.username + "의 " + post.title}
      </h1>
      <p className="absolute top-6 right-5 font-normal text-black">
        {post.created_at.substr(0, 10)}
      </p>
      <p className="mt-10 py-3 px-4 border-2 border-box border-black rounded-xl text-black">
        {post.content}
      </p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div onClick={handleLikeClick}>
        {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
      </div>
    </div>
  );
};
