import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //(아마) 사용할 컴포넌트들 가져오기
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import SignInPage from "./routes/SignInPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPage from "./routes/PostDetailPage";
import PostEditPage from "./routes/PostEditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        {/*브라우저 라우터 안에 헤더 포함 모든 요소를 감싸기 + JSX는 주석 쓸라면 중괄호 필요한 듯*/}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          {/*렌더링할 컴포넌트도 중괄호로 감싸서 넣기 */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/create" element={<PostCreatePage />} />
          <Route path="/:postId" element={<PostDetailPage />} />
          <Route path="/:postId/edit" element={<PostEditPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
