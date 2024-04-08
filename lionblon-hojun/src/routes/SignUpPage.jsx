import { useState } from "react";

const SignUpPage = () => {
  const [signUpInput, setsignUpInput] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    college: "",
    major: "",
  });

  const onChange = (e) => {
    setsignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert("회원가입 하기"); // TODO: add api call for sign up
    console.log(signUpInput);
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
          name="email"
          className="input"
          value={signUpInput.email}
          onChange={onChange}
        />

        <label required htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input
          required
          type="text"
          id="username"
          className="input"
          name="username"
          value={signUpInput.username}
          onChange={onChange}
        />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input
          required
          type="password"
          id="password"
          className="input"
          name="password"
          value={signUpInput.password}
          onChange={onChange}
        />

        <label htmlFor="confirm_password" className="label">
          *비밀번호 확인:
        </label>
        <input
          required
          type="password"
          id="confirm_password"
          className="input"
          name="confirm_password"
          onChange={onChange}
          value={signUpInput.confirm_password}
        />

        <label htmlFor="college" className="label">
          대학:{" "}
        </label>
        <input
          type="text"
          id="college"
          className="input"
          name="college"
          onChange={onChange}
          value={signUpInput.college}
        />

        <label htmlFor="major" className="label">
          전공:{" "}
        </label>
        <input
          type="text"
          id="major"
          className="input"
          name="major"
          onChange={onChange}
          value={signUpInput.major}
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
