import React, { useRef, useState } from "react";
import styled from "styled-components";
import sanitizeHtml from "sanitize-html";

const PostCreatePage = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = contentRef.current
      ? sanitizeHtml(contentRef.current.innerHTML)
      : "";
    console.log(title, content);
    alert("글쓰기 완료");
  };

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  return (
    <PostContainer onSubmit={handleSubmit}>
      <HeaderContainer>
        <PostTypeBox>
          <PostHeader
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            required
          />
        </PostTypeBox>
        <Divider />
      </HeaderContainer>
      <ContentEditable
        ref={contentRef}
        contentEditable
        aria-label="Post Content"
      />
      <TagContainer>
        <TagInputContainer>
          <TagInput
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="태그 추가"
            onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
          />
          <AddTagButton type="button" onClick={handleAddTag}>태그 추가</AddTagButton>
        </TagInputContainer>
        <TagShowContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </TagShowContainer>
      </TagContainer>
	  <Divider />
      <SubmitButton type="submit">글쓰기</SubmitButton>
    </PostContainer>
  );
};

export default PostCreatePage;

const PostContainer = styled.form`
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

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PostHeader = styled.input`
  font-size: 2rem;
  color: #666;
  font-weight: 400;
  margin: 2rem 1rem 1rem 0;
  border: none;
  width: 100%;
  background-color: transparent;
  color: #fff;
  &:focus {
    border: 1px solid orange;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const PostTypeBox = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  position: relative;
  display: inline-block;
  margin-top: 50px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 4rem;
    height: 10px;
    background-color: orange;
    z-index: -1;
  }
`;

const ContentEditable = styled.div`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 50rem;
  overflow: auto;
  max-width: 100%;
  width: 100%;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff8c00;
  }
`;

const TagInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  gap: 10px;
`;

const TagInput = styled.input`
  margin: 10px 0;
  padding: 0.5rem;
  color: #000;
  border-radius: 12px;
`;

const AddTagButton = styled.button`
  margin: 10px 0;
  padding: 0.5rem;
  border: none;
  background-color: orange;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  width: 5rem;
`;

const TagShowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  color: orange;
  justify-content: left;
  width: 100%;
  align-items: left;
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

const TagContainer = styled.div`
  display: flex;
  margin-top: 10px;
  color: orange;
  flex-direction: column;
  width: 100%;
  justify-content: left;
  align-items: left;
`;