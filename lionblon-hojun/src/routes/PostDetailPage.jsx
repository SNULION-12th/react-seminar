import { useParams } from "react-router-dom";
import posts from "../data/posts";
import { useEffect, useState } from "react";

const PostDetailPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  return (
    <div className="w-[100%] bottom-0 flex justify-center flex-col items-center">
      <div className="bg-orange-400 w-[50vw] h-[30vh] mt-7 mb-5 rounded-xl border-orange-300 border-4">
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
      <div>
        <form className="form gap-2 mb-5">
          <div className="flex flex-row items-center gap-5">
            <button
              type="reset"
              className="button mt-7"
              onClick={() => {
                alert("수정");
              }}
            >
              수정
            </button>
            <button
              type="submit"
              className="button mt-7"
              onClick={() => {
                alert("삭제");
              }}
            >
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostDetailPage;
