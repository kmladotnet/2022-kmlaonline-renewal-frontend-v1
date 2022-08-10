import React from "react";
import { NavLink } from "react-router-dom";

import profile from "../../assets/images/profile.png";
import "./Profile.css";

const Profile = () => {
  var myId = 0;
  if (localStorage.getItem("account") !== null) {
    myId = JSON.parse(localStorage.getItem("account")).schoolId;
    console.log(myId);
  } else {
    myId = JSON.parse(sessionStorage.getItem("account")).schoolId;
  }

  const onProfileClick = async () => {
    window.location.href = `user/${myId}`;
  }
  return (
      <img src={profile} alt="profile" className="profile" onClick={onProfileClick}></img>
  );
};

export default Profile;
