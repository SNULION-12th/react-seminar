const SignUpPage = () => {
  const handleSignUpSubmit = () => {
    alert("회원가입 하기");
    try{
      fetch('/api/account/signup/', {
        method: 'POST',
        body: JSON.stringify({
        'email' : document.getElementById('email'),
        'username' : document.getElementById('username'),
        'password' : document.getElementById('password'),
        'college' : document.getElementById('college'),
        'major' : document.getElementById('major')
        }),
        headers: {
        'Authorization' : "Custom Token"
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    } catch (e) {
      console.log("API가 아직 설정되지 않았습니다!" + e);
    }

  };

  const handleSignUpResest = () => {
      document.getElementById("sign-up-form").reset();
  }

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">회원가입</h3>
      <form className="form gap-2" id = "sign-up-form" onSubmit={handleSignUpSubmit.preventdefault} onReset={handleSignUpResest.preventdefault}>
        <label htmlFor="email" className="label">
          *이메일:
        </label>
        <input required type="email" id="email" className="input" />

        <label required htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input required type="text" id="username" className="input" />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input required type="password" id="password" className="input" />

        <label htmlFor="confirm_password" className="label">
          *비밀번호 확인:
        </label>
        <input
          required
          type="password"
          id="confirm_password"
          className="input"
        />

        <label htmlFor="college" className="label">
          대학:{" "}
        </label>
        <input type="text" id="college" className="input" />

        <label htmlFor="major" className="label">
          전공:{" "}
        </label>
        <input type="text" id="major" className="input" />

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
