import React from "react";
import { NavLink } from "react-router-dom";

import './SubNavigation.css'

const SubNavigation = () => {
  return (
    <div class="buttons">
      <div class="lectureroom">
        <NavLink to="/lectureroom" className="profile-button">
          <label className = "sub-buttons">공강 신청</label>
        </NavLink>
      </div>
      <div class="penaltypoints">
        <a href = "https://docs.google.com/spreadsheets/d/165mM75gJkalE1geuobB60YWLSvPzzIe-ssecshSnwKk/edit#gid=277040472" target = "_blank" rel="noreferrer" className = "sub-buttons">학생회 상벌점 확인</a>
      </div>
    </div>
  );
};

export default SubNavigation;

