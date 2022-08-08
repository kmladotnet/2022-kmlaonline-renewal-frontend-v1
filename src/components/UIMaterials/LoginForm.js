import React, { useEffect, useState } from "react";
import axios from "axios";

import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState(0);
  const navigate = useNavigate()


  useEffect(() => {
    console.log(id);
  }, [id]);
  useEffect(() => {
    console.log(password);
  }, [password]);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    console.log(responseStatus);
  }, [responseStatus]);

  const submitLogin = async () => {
    await axios
      .post("http://localhost:8800/api/auth/login", {
        username: id,
        password: password,
      })
      .then((response) => {
        var responseCode = response.status
        setResponseStatus(responseCode);
        console.log(responseStatus);
        if (response.status === 200) alert("login Successed");
      })
      .catch((error) => {
        console.log(error);
        setResponseStatus(error.response.status);
      });
  };
  console.log(responseStatus);
  if (responseStatus === 200){
    console.log("Navigate to main")
    navigate("/");
  }
  return (
    <div className="login-form">
      <form>
        <input
          type="text"
          name="email"
          className="text-field"
          placeholder="아이디"
          value={id}
          onChange={onIdChange}
        ></input>
        <input
          type="password"
          name="password"
          className="text-field"
          value={password}
          onChange={onPasswordChange}
          placeholder="비밀번호"
        ></input>
        <input
          type="button"
          value="로그인"
          className="submit-btn"
          onClick={submitLogin}
        ></input>
        <button className="register">회원가입</button>
      </form>
      <div className="links">
        <a>비밀번호를 잊어버리셨나요?</a>
      </div>
    </div>
  );
};

export default LoginForm;
