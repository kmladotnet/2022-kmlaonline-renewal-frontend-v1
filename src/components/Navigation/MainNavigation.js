import React from "react";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <div class="flip">
          <li>
            <div class="front">공지</div>
          </li>
          <li>
            <div class="front">포럼</div>
          </li>
          <li>
            <div class="front">학생회</div>
          </li>
          <li>
            <div class="front">입법</div>
          </li>
          <li>
            <div class="front">사법</div>
          </li>
          <li>
            <div class="front">행정</div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;
