import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext, PostsDataContext } from "../../App";

export const SmallPost = ({ post }) => {
  const darkMode = useContext(DarkModeContext);

  return (
    <Link
      to={`/${post.id}`}
      className={`w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium hover:shadow-2xl hover:shadow-gray-300 hover:-translate-y-2 transition-transform duration-500 ${
        darkMode ? "post-dark" : "post-light"
      }`}
    >
      <h1 className="font-extrabold text-2xl truncate">{post.title}</h1>
      <p className="mt-2">{post.author.username}</p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map(
          (tag) =>
            tag && (
              <span key={tag.id} className="tag m-1">
                #{tag.content}
              </span>
            )
        )}
      </div>
      <div>{post.like_users.length > 0 && `❤️ ${post.like_users.length}`}</div>
    </Link>
  );
};

export const BigPost = ({ post, date, updater }) => {
  const posts = useContext(PostsDataContext);
  const alertLike = () => {
    alert("좋아요");
    post.like_users.push(6);
    updater({ ...post });

    console.log(posts);
  };

  return (
    <article className="py-10 px-8 my-5 w-full bg-orange-400 ring-8 ring-transparent border-2 box-border border-white rounded-xl text-black">
      <div className="flex flex-row justify-between mb-4 items-center">
        <span className="text-3xl font-bold">
          {post.author.username}의 {post.title}
        </span>
        <span>{date}</span>
      </div>
      <input className="post-content mb-4 " defaultValue={post.content}></input>
      <div className="flex flex-row flex-wrap">
        {post.tags.map(
          (tag) =>
            tag && (
              <span key={tag.id} className="tag m-1">
                #{tag.content}
              </span>
            )
        )}
      </div>
      <span className="hover:cursor-pointer" onClick={alertLike}>
        ❤️ {post.like_users.length}
      </span>
    </article>
  );
};
