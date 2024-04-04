import { Link } from "react-router-dom"; //Link는 리액트 라우터에서 제공하는 컴포넌트임
import lion from "../../assets/images/lion.jpeg";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full gap-5 bg-black px-5 py-2.5 h-20">
      <Link to="/" className="flex flex-row items-center gap-5">
        <img src={lion} alt="lion" className="max-h-16 rounded-full" />
        <div className="text-white text-xl">SNULION BLOG</div>
      </Link>
      <div className="flex">
        <Link to="/signin" className="mr-10 p-3 uppercase text-lg">
          sign in
        </Link>
        <Link to="/signup" className="mr-10 p-3 uppercase text-lg">
          {" "}
          {/*이렇게 하면 /signup 링크로 가라는 요청을 받고 app.js의 라우터에서 재랜더링*/}
          sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
