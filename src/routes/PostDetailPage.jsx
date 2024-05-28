import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BigPost } from "../components/Posts";
import Comment from "../components/Comment";

import posts from "../data/posts";
import { getPost, getUser } from "../apis/api";
import { getCookie } from "../util/cookie";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    const getPostAPI = async () => {
      const post = await getPost(postId);
      setPost(post);
    };
    getPostAPI();
  }, [postId]);

  const navigate = useNavigate();
  const onClickDelete = () => {
    alert("게시물을 삭제합니다.");
    navigate("/");
    // add api call for deleting post
  };

  useEffect(() => {
    // access_token이 있으면 유저 정보 가져옴
    if (getCookie("access_token")) {
      const getUserAPI = async () => {
        const user = await getUser();
        setUser(user);
      };
      getUserAPI();
    }
  }, []);

  return (
    post && (
      <div className="flex flex-col items-center w-[60%] p-8">
        <BigPost post={post} />

        <Comment postId={postId} />
        <div className="flex flex-row gap-3">
        {user?.id === post?.author.id ? (
            <>
              <Link to={`/${post.id}/edit`}>
                <button className="button mt-10 py-2 px-10">수정</button>
              </Link>
              <button
                className="button mt-10 py-2 px-10"
                onClick={onClickDelete}
              >
                삭제
              </button>
            </>
          ) : null}
        </div>
      </div>
    )
  );
};

export default PostDetailPage;
