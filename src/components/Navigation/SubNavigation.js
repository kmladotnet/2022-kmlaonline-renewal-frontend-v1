import React from "react";

import './SubNavigation.css'

const SubNavigation = () => {
  return (
    <div class="buttons">
      <div class="lectureroom">
        <label className = "sub-buttons">공강 신청</label>
      </div>
      <div class="penaltypoints">
        <label className = "sub-buttons">학생회 상벌점 확인</label>
      </div>
    </div>
  );
};

export default SubNavigation;
