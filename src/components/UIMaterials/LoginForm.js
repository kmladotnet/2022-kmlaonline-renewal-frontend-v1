import React from "react";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div class="login-form">
      <form>
        <input
          type="text"
          name="email"
          class="text-field"
          placeholder="아이디"
        ></input>
        <input
          type="password"
          name="password"
          class="text-field"
          placeholder="비밀번호"
        ></input>
        <input type="submit" value="로그인" class="submit-btn"></input>
        <button class="register">회원가입</button>
      </form>
      <div class="links">
        <a>비밀번호를 잊어버리셨나요?</a>
      </div>
    </div>
  );
};

export default LoginForm;
