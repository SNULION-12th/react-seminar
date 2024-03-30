import "./App.css";
import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import Footer from "./components/Footer";
import SignUpPage from "./routes/SignUpPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPage from "./routes/PostDetailPage";
import PostEditPage from "./routes/PostEditPage";
import SignInPage from "./routes/SignInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
