import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <div class="flip">
          <NavLink to="announcements/1" className="profile-button">
            <li>
              <div className="front">공지</div>
            </li>
          </NavLink>
          <NavLink to="forum" className="profile-button">
            <li>
              <div className="front">포럼</div>
            </li>
          </NavLink>
          <NavLink to="counsil" className="profile-button">
            <li>
              <div className="front">학생회</div>
            </li>
          </NavLink>
          <NavLink to="legislative" className="profile-button">
            <li>
              <div className="front">입법</div>
            </li>
          </NavLink>
          <NavLink to="judicial" className="profile-button">
            <li>
              <div className="front">사법</div>
            </li>
          </NavLink>
          <NavLink to="executive" className="profile-button">
            <li>
              <div className="front">행정</div>
            </li>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;
