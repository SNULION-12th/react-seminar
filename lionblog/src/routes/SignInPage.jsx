const SignInPage = () => {
  const handleSignInSubmit = () => {
    alert("로그인되었습니다!"); // TODO: add api call for sign up
    try{
      fetch('/api/account/signin/', {
        method: 'POST',
        body: JSON.stringify({
        'username' : document.getElementById('username'),
        'password' : document.getElementById('password')
        }),
        headers: {
        'Authorization' : "Custom Token"
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    } catch (e) {
      console.log("아직 API가 세팅되지 않았습니다!" + e);
    }
  };

  const handleReset = () => {
    document.getElementById("sign-in-form").reset();
  }

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">로그인</h3>
      <form className="form gap-2" id = "sign-in-form" onSubmit={handleSignInSubmit.preventdefault} onReset={handleReset.preventdefault}>

        <label required htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input required type="text" id="username" className="input" />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input required type="password" id="password" className="input" />

        <div className="flex flex-row items-center gap-5">
          <button type="reset" className="button mt-7">
            초기화
          </button>
          <button type="submit" className="button mt-7">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
