import { Link } from "react-router-dom";
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
  return (
    <div>
      <div className="flex flex-col relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-0 border-box border-white bg-orange-400 text-black border-transparent rounded-xl font-medium  ring-orange-200">
        <div className="w-full flex justify-between mb-4">
          <h1 className="font-extrabold text-2xl truncate">
            {post.author.username}의 {post.title}
          </h1>
          <h1>{post.created_at.substr(0, 10)}</h1>
        </div>

        <div className="w-full outline border-black py-1.5 px-1.5 rounded-md">
          {post.content}
        </div>

        <div className="text-left flex flex-wrap mt-5">
          {post.tags.map((tag) => (
            <span key={tag.id} className="tag m-1">
              #{tag.content}
            </span>
          ))}
        </div>

        <div>
          {post.like_users.length > 0 && (
            <button onClick={() => alert("좋아요!")}>
              🖤 {post.like_users.length}
            </button>
          )}
        </div>
      </div>
      <div className="w-full place-items-center gap-5 inline-block text-center">
        <Link to={`/${post.id}/edit`} state={{ postId: post.id }}>
          <button type="reset" className="button mt-7 mx-0.5">
            수정
          </button>
        </Link>

        <button
          type="submit"
          className="button mt-7 mx-2"
          onClick={() => alert("삭제")}
        >
          삭제
        </button>
      </div>
    </div>
  );
};
