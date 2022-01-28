import React from "react";
import { NavLink } from "react-router-dom";

import profile from "../../assets/images/profile.png";
import "./Profile.css";

const Profile = () => {
  return (
    <NavLink to="user/id" className="profile-button">
      <img src={profile} alt="profile" className="profile" onClick=""></img>
    </NavLink>
  );
};

export default Profile;
