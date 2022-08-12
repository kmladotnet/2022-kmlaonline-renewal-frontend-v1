import React from "react";

import LoginForm from "../../components/UIMaterials/LoginForm/LoginForm";
import LoginTitle from "../../components/UIMaterials/LoginTitle/LoginTitle";
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <LoginTitle />
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
