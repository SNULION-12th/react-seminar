const SignInPage = () => {
  const handleSignInSubmit = () => {
    alert("로그인하기");
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="font-bold text-2xl">Sign In Page</h3>
      <form className="form gap-2" onSubmit={handleSignInSubmit}>
        <label htmlFor="username" className="label">
          *유저 이름
        </label>
        <input required type="text" id="id" className="input" />

        <label htmlFor="password" className="label">
          *비밀번호
        </label>
        <input required type="text" id="id" className="input" />

        <div className="flex flex-row items-center gap-5">
          <button type="reset" className="button mt-7">
            {/* 초기화되는 원리가 뭐지? */}
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
