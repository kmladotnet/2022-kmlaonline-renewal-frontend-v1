import React from "react";

import "./LoginTitle.css";
import logo from "../../assets/images/kmlaonline logo one.png";

const LoginTitle = () => {
  return (
    <div className="title">
      <img className="wow" src={logo} alt="main logo"></img>
      <h1 className="intro">민족사관고등학교 온라인 커뮤니티</h1>
    </div>
  );
};

export default LoginTitle;
