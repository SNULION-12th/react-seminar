import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import SignInPage from "./routes/SignInPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPage from "./routes/PostDetailPage";
import PostEditPage from "./routes/PostEditPage";
import "./App.css";
import { PostProvider } from "./routes/postContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PostProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/create" element={<PostCreatePage />} />
        <Route path="/post-detail" element={<PostDetailPage />} />
        <Route path="/post-edit" element={<PostEditPage />} />
      </Routes>
      </PostProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
