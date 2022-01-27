import React from "react";

import profile from '../../assets/images/profile.png'
import './Profile.css'

const Profile = () => {
  return (
      <img src = {profile} alt = "profile" className = "profile"></img>
  );
};

export default Profile;
