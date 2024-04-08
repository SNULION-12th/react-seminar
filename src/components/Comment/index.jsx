import { useState } from "react";
import comments from "../../data/comments";
import CommentElement from "./CommentElement";

// setSignInData({ ...signInData, [id]: value });
// const [signInData, setSignInData] = useState({
//   username: "",
//   password: "",
// });
const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [comment, setComment] = useState(comments);
  const [newComment, setNewComment] = useState({
    id: { postId },
    // content: "새해 복 많이 받으세요^^",
    created_at: "2024-01-01T15:09:43Z", // 나중에 현재 날짜로 수정
    post: { postId },
    author: {
      id: 100,
      username: "admin",
    },
  });
  const handleComment = (e) => {
    // console.log("-----");
    setNewComment({ ...newComment, content: e.target.value });
    console.log(newComment.content);
  };

  const handleCommentSubmit = (e) => {
    // e에서는 무엇이 출력되는가? 안되면 로그 찍어야지

    // const { value } = e.target;
    e.preventDefault();
    // console.log(e);
    // console.log("!!");
    setNewComment();
    setComment({ ...comment, [e.target.id]: e.target.value });
    // console.log({ newComment });
    alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
  };

  const handleCommentDelete = (commentId) => {
    console.log(commentId);
    alert("댓글 삭제"); // add api call for deleting comment
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>

      {/* // TODO: comments 더미데이터를 돌며 각 댓글마다 CommentElement를 만들어주세요!
                // Hint: CommentElement에는 댓글인 comment와 댓글 삭제를 하는 handleCommentDelete라는 props가 필요합니다.
                // Hint: CommentElement에는 이후 API 연결을 위한 postId 정보도 필요하겠죠?
            // TODO: 새로운 댓글을 작성하는 form을 만들어주세요! */}
      {/* {commentList} */}

      <div>
        <div className="flex-column"></div>
        <div>
          {comments.map((comment) => (
            <div className="flex justify-between my-5">
              <div className="flex flex-col">
                <div className="my-0.5">{comment.content}</div>
                <div className="my-0.5 text-gray-400" id={comment.id}>
                  {comment.created_at.slice(0, 10)}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-2">삭제</div>
                <div className="mx-2">수정</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className="form" onSubmit={handleCommentSubmit}>
        <div className="flex w-full flex-col">
          <div className="flex  w-full gap-x-5">
            <input
              type="text"
              placeholder="댓글을 입력해주세요"
              id="tags"
              // value={tagInputValue}
              onChange={handleComment}
              // className="input grow"
              className="border-2 border-white w-full px-6 py-3 rounded-2xl text-white bg-transparent placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent;"
            />
            <button
              type="submit"
              className="small-button w-20 rounded-2xl bg-orange-400"
              id="content" // id를 content로 변경
              name="content" // name 속성 추가
            >
              작성
            </button>
          </div>
        </div>
      </form>
      <form className="flex flex-row items-center justify-center mt-10 gap-2">
        {/* 뒤에 뭔가 추가 */}
        {/* ... */}
      </form>
    </div>
  );
};

export default Comment;
