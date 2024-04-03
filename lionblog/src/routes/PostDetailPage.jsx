import { BigPost } from "../components/posts";

const PostDetailPage = () => {
  function getPostHandler(id) {
    try{
      fetch(`/api/post/${id}/`, {
        method: 'GET',
        headers: {
        'Authorization' : "Custom Token"
        }
      })
      .then((response) => response.json())
    } catch (e) {
      console.log("아직 API가 세팅되지 않았습니다!" + e);
    }
  }

  return (
    <BigPost ></BigPost>
  )
};

export default PostDetailPage;
