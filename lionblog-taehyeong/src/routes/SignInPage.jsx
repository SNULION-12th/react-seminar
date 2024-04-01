const SignInPage = () => {
  return (
    <main className="flex flex-col items-center max-w-3xl w-screen">
      <h3 className="font-bold text-2xl">로그인</h3>
      <form className="form gap-2" method="POST" action="/api/account/signin">
        <label htmlFor="username" className="label">
          *유저 이름:
        </label>
        <input type="text" id="username" className="input" required />

        <label htmlFor="password" className="label">
          *비밀번호:
        </label>
        <input type="password" id="password" className="input" required />

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
