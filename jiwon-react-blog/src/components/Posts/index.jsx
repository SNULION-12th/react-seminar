import { Link } from "react-router-dom";

export const SmallPost = ({ post }) => {
  //이렇게 중괄호로 감싸서 매개변수로 받으면 해당 element의 props를 바로 사용 가능한듯
  return (
    <Link
      to={`/${post.id}`} //백틱으로 데이터 전달
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
    //변수가 문자열에 침투하므로 백틱
  );
};

export const BigPost = ({ post }) => {
  const likeSubmitHandle = () => {
    alert("좋아용");
  };

  return (
    <div className="block rounded-xl px-8 bg-orange-500 border-4 border-orange-400 text-black mt-10">
      <div className="flex flex-row justify-between my-5">
        <div className="font-bold text-[23px]">{`${post.author.username}의 #${post.id} post`}</div>
        <span>{post.created_at.substr(0, 10)}</span>
      </div>
      <div className="border-black border-solid border-2 rounded-lg p-3 text-[17px]">
        <p>{post.content}</p>
      </div>
      <div className="my-8">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <form className="mb-6" onSubmit={likeSubmitHandle}>
        <button type="submit">{`❤️ ${post.like_users.length}`}</button>
      </form>
    </div>
  );
};
