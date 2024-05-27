import { useState } from "react";
import { signUp } from "../apis/api";
import axios from "axios";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    college: "",
    major: "",
  });

  const handleSignUpData = (e) => {
    const { id, value } = e.target;
    setSignUpData({ ...signUpData, [id]: value });
  };

  /*
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/account/signup/",
      signUpData, //이 request 에서 나온 데이터를 여기다가 담겠다는 뜻
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        withCredentials: true,
      }
    );
    console.log("Response: ", response);

    // console.log(formData);
    // alert(`${formData.email}로 회원가입 해 줘`);
    // add api call for sign up here
  };
  */

  const handleSignUpSubmit = async (e) => {
    e.preventDefault(); // to prevent reloading the page
    signUp(signUpData);
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">회원가입</h3>
      <form className="form gap-2" onSubmit={handleSignUpSubmit}>
        <label htmlFor="email" className="label">
          *이메일:
        </label>
        <input
          required
          type="email"
          id="email"
          className="input"
          value={signUpData.email}
          onChange={handleSignUpData}
        />

        <label required htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input
          required
          type="text"
          id="username"
          className="input"
          value={signUpData.username}
          onChange={handleSignUpData}
        />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input
          required
          type="password"
          id="password"
          className="input"
          value={signUpData.password}
          onChange={handleSignUpData}
        />

        <label htmlFor="confirm_password" className="label">
          *비밀번호 확인:
        </label>
        <input
          required
          type="password"
          id="confirm_password"
          className="input"
          value={signUpData.confirm_password}
          onChange={handleSignUpData}
        />

        <label htmlFor="college" className="label">
          대학:{" "}
        </label>
        <input
          type="text"
          id="college"
          className="input"
          value={signUpData.college}
          onChange={handleSignUpData}
        />

        <label htmlFor="major" className="label">
          전공:{" "}
        </label>
        <input
          type="text"
          id="major"
          className="input"
          value={signUpData.major}
          onChange={handleSignUpData}
        />

        <div className="flex flex-row items-center gap-5">
          <button type="reset" className="button mt-7">
            초기화
          </button>
          <button type="submit" className="button mt-7">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
