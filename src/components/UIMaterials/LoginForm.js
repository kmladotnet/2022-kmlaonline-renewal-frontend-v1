import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

async function loginUser(credentials) {
  return fetch("http://localhost:8800/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onIdChange = (e) => {
    setId(e.target.value);
  };

  useEffect(async () => {
    //console.log(responseStatus);
    if (responseStatus === 200) {
      //console.log("Navigate to main");
      await axios
        .post("http://localhost:8800/api/auth/login", {
          username: id,
          password: password,
        })
        .then((response) => {
          var responseCode = response.status;
          setResponseStatus(responseCode);
          console.log(response.data);
          console.log(isChecked);
          if (isChecked) {
            localStorage.setItem("account", JSON.stringify(response.data));
          } else {
            sessionStorage.setItem("account", JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
          setResponseStatus(error.response.status);
        });
      window.location.href = "/";
      //navigate("/main");
    } else if (responseStatus === 500) {
      console.log("Login Failed");
      setResponseStatus(0);
      alert("Login Failed");
    }
  }, [responseStatus]);

  const submitLogin = async () => {
    await axios
      .post("http://localhost:8800/api/auth/login", {
        username: id,
        password: password,
      })
      .then((response) => {
        var responseCode = response.status;
        setResponseStatus(responseCode);
      })
      .catch((error) => {
        console.log(error);
        setResponseStatus(error.response.status);
      });
  };

  //console.log(responseStatus);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      id,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        console.log("Success");
      });
      console.log("Test");
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          className="text-field"
          placeholder="아이디"
          value={id}
          onChange={onIdChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          className="text-field"
          value={password}
          required
          onChange={onPasswordChange}
          placeholder="비밀번호"
        ></input>
        <input
          type="submit"
          value="로그인"
          className="submit-btn"
          onClick={submitLogin}
        ></input>
        <button className="register">회원가입</button>
      </form>
      <input
        type="checkbox"
        id="memorize"
        value={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      ></input>
      <label for="memorize" className="remember">
        로그인 계정 기억하기
      </label>
      <div className="links">
        <a>비밀번호를 잊어버리셨나요?</a>
      </div>
    </div>
  );
};

export default LoginForm;
