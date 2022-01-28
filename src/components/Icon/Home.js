import React from "react";
import { NavLink } from "react-router-dom";

import home from "../../assets/images/home.png";
import "./Home.css";

const Profile = () => {
  return (
    <NavLink to="/" className="home-button">
      <img src={home} alt="home" className="home"></img>
    </NavLink>
  );
};

export default Profile;
