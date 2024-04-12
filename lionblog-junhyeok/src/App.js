import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./routes/SignUpPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./routes/HomePage";
import SignInPage from "./routes/SignInPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPaege from "./routes/PostDetailPage";
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
          <Route path="/posts/:id" element={<PostDetailPaege />} />
          <Route path="/posts/write" element={<PostCreatePage />} />
          <Route path="/posts/edit/:id" element={<PostEditPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;