import React from "react";

import "./UserInfo.css";
import profile from "../../assets/images/profile.png";

const UserInfo = (props) => {
  return (
    <div class="profile-form">
      <div class="top-elements">
        <img src={profile} class="profile-picture" alt="profile pic"></img>
        <div class="name">
          <label class="korean-name">김솔</label>
          <label class="english-name">Keam Sol</label>
          <br></br>
          <label class="comment">안녕하세요! 국내 정시입니다!</label>
        </div>
      </div>
      <div class="info">
        <table border="0" class="infotable">
          <tr>
            <td class="infotype">학번</td>
            <td class="infoelement">{props.name}</td>
          </tr>
          <tr>
            <td class="infotype">생일</td>
            <td class="infoelement">2006-09-23</td>
          </tr>
          <tr>
            <td class="infotype">이메일</td>
            <td class="infoelement">solkeam@gmail.com</td>
          </tr>
          <tr>
            <td class="infotype">전화번호</td>
            <td class="infoelement">010-0000-0000</td>
          </tr>
          <tr>
            <td class="infotype">글 수</td>
            <td class="infoelement">0개</td>
          </tr>
          <tr>
            <td class="infotype">댓글 수</td>
            <td class="infoelement">0개</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
