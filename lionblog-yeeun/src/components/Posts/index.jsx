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
      <div>{post.like_users.length > 0 && `❤️ ${post.like_users.length}`}</div>
    </div>
  );
};

export const BigPost = ({ post }) => {
  const pressLike = () => {
    alert("이 게시물을 좋아합니다.");
  };
  return (
    <div className="text-black w-full group py-10 px-10 my-5 border-4 border-box border-orange-200 bg-orange-400 rounded-xl font-medium">
      <div className="flex justify-between w-full align-middle">
        <h1 className="font-extrabold text-2xl truncate">
          {post.author.username}의{post.title}
        </h1>
        <p>{post.created_at.slice(0, 10)}</p>
      </div>
      <div className="border-s-orange-300">
        <p className="mt-5 ring-1 p-1 ring-black rounded">{post.id}번째 게시물입니다</p>
      </div>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <button onClick={pressLike}>
        {post.like_users.length > 0 && `🖤 ${post.like_users.length}`}
      </button>
    </div>
  );
};
