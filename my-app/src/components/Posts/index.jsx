export const SmallPost = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
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
    </div>
  );
};

export const BigPost = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-orange-400 w-[50vw] h-[30vh] mt-7 mb-5 rounded-xl border-orange-300 border-4"
    >
      {post && (
        <div className="text-black flex flex-col m-6">
          <div className="text-xl mb-4 font-bold">
            {post.author.username}의 {post.title}
          </div>
          <div className=" border-black border-2 rounded-xl p-2 text-lg mb-4">
            {post.content}
          </div>
          <div>
            {post.tags.map((tag) => (
              <span
                className="bg-black text-white rounded-2xl p-2 text-xs ml-2"
                key={tag.id}
              >
                #{tag.content}
              </span>
            ))}
          </div>
          <div className="mt-4">🖤{post.like_users.length}</div>
        </div>
      )}
    </div>
  );
};