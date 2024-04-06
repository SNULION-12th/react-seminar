import { useState } from "react";

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
    //각 input에 입력되는 data가 변할때마다 SignUpPage의 상태를 변경해주는 이벤트 함수
    const { id, value } = e.target;
    //이렇게 하면 현재 이벤트가 발생한 대상의 key값을 id로, value를 value로 받아올 수 있음 -> 개별 관리 가능
    setSignUpData({ ...signUpData, [id]: value });
    //스프레드 문법으로 일단 signUpData의 모든 요소를 갈라서 넣어서 새 객체를 만드는데,
    //그 중에서 id라는 key를 가지는 것은 value를 뒤에 써준걸로 바꾼다!
  };

  const handleSignUpSubmit = (e) => {
    //저장 버튼을 눌렀을 때 발생시킬 이벤트
    e.preventDefault();
    console.log(signUpData);
    alert("회원가입 하기");
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
          onChange={handleSignUpData} //onChange를 통해 값이 바뀔때마다 실행할 함수 지정
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
