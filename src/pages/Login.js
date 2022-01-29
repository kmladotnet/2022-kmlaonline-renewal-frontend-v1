import React from "react";

import LoginForm from "../components/UIMaterials/LoginForm";
import LoginTitle from "../components/UIMaterials/LoginTitle";
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
