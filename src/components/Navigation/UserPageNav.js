import React from "react";

import Home from '../Icon/Home';
import Search from '../Icon/Search';
import Notification from '../Icon/Notification';
import './UserPageNav.css'

const Icons = () => {
  return (
    <React.Fragment>
      <div className="flexbox-container">
        <Home className="home" />
        <Search className="search" />
        <Notification className="noti" />
      </div>
    </React.Fragment>
  );
};

export default Icons;

