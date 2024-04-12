import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import posts from "../data/posts";
import moment from "moment";
import { useEffect, useState } from "react";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [like, setLike] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);

  useEffect(() => {
    setLike(posts.find((post) => post.id === parseInt(id)).like_users.length);
  }, [id]);

  const handleDelete = () => {
    alert("게시물 삭제하기"); // TODO: add api call for delete post
  };

  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return <div>Post not found</div>;
  }

  const handleLike = () => {
    if(likeClicked) {
      setLike(like - 1);
      setLikeClicked(false);
    } else {
      setLike(like + 1);
      setLikeClicked(true);
    }
  };

  return (
    <PostContainer>
      <EditDeleteButtonContainer>
        <Button onClick={() => navigate(`/posts/edit/${id}`)}>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </EditDeleteButtonContainer>
      <HeaderContainer>
        <PostTypeBox>{post.title}</PostTypeBox>
        <PostInfo>
          <PostDate>
            <PostSubType>
              {moment(post.created_at).format("YYYY-MM-DD HH:mm")}
            </PostSubType>
          </PostDate>
          <PostCreator>{post.author.username}</PostCreator>
        </PostInfo>
        <Divider />
      </HeaderContainer>
      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      <OtherInfo>
        <TagContainer>
          {post.tags.map((tag) => (
            <Tag key={tag.id}>#{tag.content}</Tag>
          ))}
        </TagContainer>
        <LikeButton onClick={handleLike}>
          좋아요 {like}
        </LikeButton>
      </OtherInfo>
      <Divider />
    </PostContainer>
  );
};

export default PostDetailPage;

const PostContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  background-color: transparent;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-word;
  border: none;

  & img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  & iframe,
  & video {
    max-width: 100%;
  }
`;

const EditDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #000;
  border: 1px solid #000;
  color: orange;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: orange;
    color: #fff;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PostDate = styled.span`
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;
`;

const PostSubType = styled.span`
  font-size: 1rem;
  color: #fff;
  margin-right: 10px;
`;

const PostCreator = styled.span`
  font-size: 1rem;
  color: #fff;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
`;

const PostTypeBox = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  display: inline-block;
  margin-top: 50px;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: orange;
    z-index: -1;
  }
`;

const PostContent = styled.div`
  margin: 10rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  color: orange;
`;

const Tag = styled.span`
  background-color: #000;
  padding: 5px 10px;
  border: 1px solid orange;
  border-radius: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: oragne;
`;

const LikeButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: #fff;
  }

  &:active {
    background-color: orange;
    color: #fff;
  }
`;

const OtherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;