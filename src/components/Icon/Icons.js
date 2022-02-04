import React, { useState } from "react";

import Profile from "./Profile";
import Notification from "./Notification";
import Search from "./Search";
import Searchbox from "./Searchbox";
import "./Icons.css";

const Icons = () => {
  let searchboxIsOpen = false;

  return (
    <React.Fragment>
      <div className="flexbox-container">
        <Profile className="profile" />
        <Searchbox className="search" />
        <Notification className="noti" />
      </div>
    </React.Fragment>
  );
};

export default Icons;
