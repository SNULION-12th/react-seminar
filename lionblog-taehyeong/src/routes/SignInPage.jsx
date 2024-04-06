import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [signInData, setSignInData] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const dataChangeHandler = (e) => {
    const { id, value } = e.target;
    setSignInData({ ...signInData, [id]: value });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(signInData);
    alert("로그인 하기");
    navigate("/");
  };

  return (
    <main className="main-container">
      <h3 className="font-bold text-2xl">로그인</h3>
      <form
        className="form gap-2"
        method="POST"
        action="/api/account/signin"
        onSubmit={handleSignin}
      >
        <label htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input
          type="text"
          id="username"
          className="input"
          required
          onChange={dataChangeHandler}
          value={signInData.username}
        />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input
          type="password"
          id="password"
          className="input"
          required
          onChange={dataChangeHandler}
          value={signInData.password}
        />

        <div className="flex flex-row items-center gap-5 mt-6">
          <button type="reset" className="button">
            초기화
          </button>
          <button type="submit" className="button">
            로그인
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignInPage;
