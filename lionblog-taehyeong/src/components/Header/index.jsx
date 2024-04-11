import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../App";

import lion from "../../assets/images/lion.jpeg";

const Header = ({ darkModeToggle }) => {
  const darkMode = useContext(DarkModeContext);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // 로그인 여부 상태, 우선 false로 초기화

  const handleSignOut = () => {
    // TODO: 이후 api 연결 시 token 제거
  };

  useEffect(() => {
    // TODO: 이후 api 연결 시 유효한 token이 있다면 setIsUserLoggedIn(true)로 상태 변경하는 코드 작성
  }, []);

  return (
    <div
      className={`header flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20`}
    >
      <Link to="/" className="flex flex-row items-center gap-5">
        <img src={lion} alt="lion" className="max-h-16 rounded-full" />
        <div className="text-xl">SNULION BLOG</div>
      </Link>
      <div className="flex">
        {isUserLoggedIn ? (
          <Link to="/" className="mr-10 p-3 uppercase text-lg">
            sign out
          </Link>
        ) : (
          <>
            <Link to="/signin" className="mr-10 p-3 uppercase text-lg">
              sign in
            </Link>
            <Link to="/signup" className="mr-10 p-3 uppercase text-lg">
              sign up
            </Link>
          </>
        )}
        <button onClick={darkModeToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className={`bi bi-moon ${darkMode ? "fill-white" : "fill-black"}`}
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
