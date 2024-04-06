import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./routes/HomePage";
import SignUpPage from "./routes/SignUpPage";
import SignInPage from "./routes/SignInPage";
import PostCreatePage from "./routes/PostCreatePage";
import PostDetailPage from "./routes/PostDetailPage";
import PostEditPage from "./routes/PostEditPage";
import "./App.css";
import posts from "./data/posts";

export const DarkModeContext = createContext(false);
export const PostsDataContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => setDarkMode(!darkMode);

  return (
    <PostsDataContext.Provider value={posts}>
      <DarkModeContext.Provider value={darkMode}>
        <div className={`App ${darkMode ? "dark" : "light"}`}>
          <BrowserRouter>
            <Header darkModeToggle={darkModeToggle} />
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
      </DarkModeContext.Provider>
    </PostsDataContext.Provider>
  );
}

export default App;
