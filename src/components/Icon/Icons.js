import React from "react";

import Profile from "./Profile";
import Notification from "./Notification";
import Search from "./Search";
import './Icons.css'

const Icons = () => {
  return (
    <React.Fragment>
      <div className="flexbox-container">
        <Profile className="profile" />
        <Search className="search" />
        <Notification className="noti" />
      </div>
    </React.Fragment>
  );
};

export default Icons;

