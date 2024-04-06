import { useState, useEffect } from "react";
import posts from "../data/posts";
import BigPost from "../components/Posts";

const PostCreatePage = () => {
  const [post, setPost] = useState({
    id: posts.length,
    title: "",
    content: "",
    author: { id: posts.length, username: "아기사자" },
    tags: [],
    like_users: [],
    created_at: "2024-02-04T07:42:50.658501Z",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [autoCompletes, setAutoCompletes] = useState([]);

  useEffect(() => {
    //초기 렌더링 시 모든 게시물들의 태글르 하나의 배열로 모아서 tag 상태로 저장하는 것
    const duplicatedTagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }
      return acc;
    }, new Set());
    const tagList = [...duplicatedTagList];
    setTags([...tagList]);
  }, []);

  const handleAutoCompletes = (autoComplete) => {
    const selectedTag = tags.find((tag) => tag === autoComplete); //자동완성(추천리스트)에 뜬 태그를 클릭했을시 그 태그를 목록에서 찾아서 저장
    if (post.tags.includes(selectedTag)) return; // 입력한 내용이 이미 등록된 태그면 그냥 등록 안됨(중복 등록 방지)
    setPost({
      //등록되지 않았던 태그라면 스프레드 문법으로 태그 리스트에 포함 갱신
      ...post,
      tags: [...post.tags, selectedTag],
    });
    setTagInputValue(""); //그 후에는 입력값이 있던걸 초기화하고 자동 완성(추천 리스트)도 초기화
    setAutoCompletes([]);
  };

  const handleTag = (e) => {
    //입력값이 있다면 그 입력값을 포함하는 태그들을 전체 태그 목록에서 뽑아서 나열(추천리스트)
    setTagInputValue(e.target.value);
    if (e.target.value) {
      const autoCompleteData = tags.filter((tag) =>
        tag.includes(e.target.value)
      );
      setAutoCompletes(autoCompleteData);
    } else {
      setAutoCompletes([]);
    }
  };

  const addTag = (e) => {
    //태그 추가시 발생하는 함수
    e.preventDefault();
    if (post.tags.find((tag) => tag === tagInputValue)) return; //만약 추가하고자 하는 태그가 이미 있으면 중복 방지를 위해 추가하지 않음
    setPost({
      //새로운 태그 입력 값을 post에 넣어서 상태 변경
      ...post,
      tags: [...post.tags, tagInputValue],
    });
    setTagInputValue(""); //태그 입력값 초기화, 자동완성 리스트 초기화
    setAutoCompletes([]);
  };

  const deleteTag = (tag) => {
    //삭제 버튼으로 입력된 태그를 삭제(입력된 태그는 파라미터로 받음)
    setPost({
      ...post,
      tags: post.tags.filter((t) => t !== tag), //스프레드 문법에서 태그 key만 따로 관리해서 입력한 태그만 빼고 남김
    });
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.id]: e.target.value }); //이렇게 이벤트의 대상을 직접 지정해서도 할 수 있음
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const createdPost = {
      //현재 post에 입력된 상태를 바탕으로 태그 값을 수정하고, 좋아요 한 유저 리스트를 비워서 새로운 게시물 생성
      ...post,
      like_users: [],
      tags: post.tags.map((tag, idx) => {
        return { id: idx + 1, content: tag }; //이거 Bigpost용 태그 아이디라고 하는데 잘 모르겠음
      }),
    };
    setPost(createdPost); //그 게시물을 현재 상태로 상태변경
    setIsSubmitted(true); //저장이 되어있는지 상태 변경
    alert("게시글을 등록합니다.");
  };

  return isSubmitted ? ( //저장된 상태라면 완성된 BigPost를 보여주고, 그렇지 않았다면 그냥 게시물 작성 상태에 남아있기
    <div className="flex flex-col items-center w-[60%] p-8">
      <BigPost post={post} />
    </div>
  ) : (
    <div className="flex flex-col items-center w-3/5">
      <h3 className="font-bold text-4xl">게시글 작성</h3>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="title" className="label">
          제목
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleChange}
          id="title"
          className="input"
          required
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <textarea
          placeholder="내용을 입력하세요"
          id="content"
          value={post.content}
          cols="30"
          rows="10"
          className="input"
          onChange={handleChange}
          required
        ></textarea>
        <label htmlFor="tags" className="label">
          태그
        </label>
        <div className="flex w-full flex-col">
          <div className="flex  w-full gap-x-5">
            <input
              type="text"
              placeholder="태그를 추가하세요"
              id="tags"
              className="input grow"
              value={tagInputValue}
              onChange={handleTag}
            />
            <button
              type="button"
              onClick={addTag}
              className="small-button w-16"
            >
              추가
            </button>
          </div>
        </div>
        <div className="flex mt-2 bg-black border-gray-500 rounded-2xl w-full">
          {autoCompletes &&
            autoCompletes.map(
              (
                autoComplete //버튼으로 되어있는 자동완성 리스트를 나열
              ) => (
                <button
                  className="tag rounded-2xl text-start border-gray-500 py-2 px-3 text-white focus:bg-gray"
                  key={autoComplete}
                  onClick={() => handleAutoCompletes(autoComplete)} //인풋이 필요한 함수를 이벤트로 실행할 때는 이렇게 함수로 한번 더 차원을 높여서 사용
                >
                  #{autoComplete}
                </button>
              )
            )}
        </div>
        {post.tags && (
          <div className="flex w-full mt-3 gap-x-1 flew-nowrap">
            {post.tags.map((tag) => (
              <div key={tag} className="flex">
                <span className="tag active m-1 flex flex-row items-center gap-x-2">
                  <p>#{tag}</p>
                </span>
                <button
                  onClick={() => deleteTag(tag)}
                  className="after:content-['\00d7'] text-xl"
                />
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="button mt-7">
          완료
        </button>
      </form>
    </div>
  );
};

export default PostCreatePage;
