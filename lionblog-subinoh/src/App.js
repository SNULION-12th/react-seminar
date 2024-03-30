import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./routes/SignUpPage";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;