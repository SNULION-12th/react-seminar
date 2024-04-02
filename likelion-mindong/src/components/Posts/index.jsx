import { Link } from "react-router-dom";
import PostEditPage from "../../routes/PostEditPage";

export const SmallPost = ({ post }) => {
  return (
    <Link
      to={`/${post.id}`}
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
    </Link>
  );
};

export const BigPost = ({ post }) => {
  const handleSignUpSubmit = () => {
    alert("삭제");
  };
  const handleSignUpSubmit2 = () => {
    alert("좋아요");
  };

  return (
    <Link to={`/${post.id}`} className="w-full flex flex-col items-center">
      <div className="w-1/2 relative block group py-10 px-2 sm:px-8 mr-5 my-5 ring-8 ring-transparent border-4 border-box border-orange-200 bg-orange-400 text-black rounded-xl font-medium">
        <div class="flex justify-between">
          <h1 className="font-extrabold text-2xl truncate">
            {post.author.username}의 {post.title}
          </h1>
          <span>{post.created_at.slice(0, 10)}</span>
        </div>

        <div class="w-50 py-2 px-2 border-2 rounded-xl m-4 border-box border-black">
          {post.content}
        </div>

        <div className="flex flex-wrap mt-5">
          {post.tags.map((tag) => (
            <span key={tag.id} className="tag m-1">
              #{tag.content}
            </span>
          ))}
        </div>
        <div class="m-2" onClick={handleSignUpSubmit2}>
          {post.like_users.length > 0 && `♥︎ ${post.like_users.length}`}
        </div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <Link
          to={`/${post.id}/edit`}
          button
          type="reset"
          className="button mt-7"
        >
          수정
        </Link>
        <button
          type="submit"
          className="button mt-7"
          onClick={handleSignUpSubmit}
        >
          삭제
        </button>
      </div>
    </Link>
  );
};
