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

function parseTime(date) {
  return new Date(date);
}

export const BigPost = ({post}) => {
  const createdTime = parseTime(post.created_at)
  const year = createdTime.getUTCFullYear();
  const month = createdTime.getUTCMonth() + 1;
  const date = createdTime.getUTCDate();
  return (
<div className = "w-5/6 block py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-3 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
    <div>
      <h1 className="font-extrabold">{post.author}"의 "{post.title}</h1>
      <h3 classname = "font-medium">{year}-{month}-{date}</h3>
    </div>
    
    <article>
      <p classname = "text-base font-light m-2">{post.content}</p>
    </article>
    <div classname = "flex-wrap" id = "tag-wrapper">
      {post.tags.map((tag) => (<p classname = "bg-black text-white font-medium text-sm rounded-full">#{tag.content}</p>))}
    </div>

    <div>
     ❤{post.like_users.length}
    </div>
</div>
  )
}