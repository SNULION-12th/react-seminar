import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SignInPage from "./routes/SignInPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPage from "./routes/PostDetailPage";
import PostEditPage from "./routes/PostEditPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/create" element={<PostCreatePage />} />
          <Route path="/:postId" element={<PostDetailPage />} />
          <Route path="/:postId/edit" element={<PostEditPage />} />
          {/* path 에 변수가 들어가면 : 를 넣음 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
