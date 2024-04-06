import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import lion from "../../assets/images/lion.jpeg";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // 로그인 여부 상태, 우선 false로 초기화

  useEffect(() => {
    // TODO: 이후 api 연결 시 유효한 token이 있다면 setIsUserLoggedIn(true)로 상태 변경하는 코드 작성
  }, []);

  const handleSignOut = () => {
    // TODO: 이후 api 연결 시 token 제거
  };

  return (
    <div className="flex items-center justify-between w-full gap-5 bg-black px-5 py-2.5 h-20">
      <Link to="/" className="flex flex-row items-center gap-5">
        <img src={lion} alt="lion" className="max-h-16 rounded-full" />
        <div className="text-white text-xl">SNULION BLOG</div>
      </Link>
      <div className="flex">
				{/* 수정 👇🏻 */}
        {isUserLoggedIn ? 
          <Link to="/" className="mr-10 p-3 uppercase text-lg">sign out</Link>
          :
          <>
            <Link to="/signin" className="mr-10 p-3 uppercase text-lg">
              sign in
            </Link>
            <Link to="/signup" className="mr-10 p-3 uppercase text-lg">
              sign up
            </Link>
          </>
        }
				{/* 수정 👆🏻 */}
      </div>
    </div>
  );
};

export default Header;