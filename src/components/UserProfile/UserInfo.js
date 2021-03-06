import React from "react";

import "./UserInfo.css";
import profile from "../../assets/images/profile.png";

const UserInfo = (props) => {
  return (
    <div class="profile-form">
      <div class="top-elements">
        <img src={profile} class="profile-picture" alt="profile pic"></img>
        <div class="name">
          <label class="korean-name">{props.userList[0].name_kr} &nbsp;</label>
          <label class="english-name">{props.userList[0].name_en}</label>
          <br></br>
          <label class="comment">{props.userList[0].intro}</label>
        </div>
      </div>
      <div class="info">
        <table border="0" class="infotable">
          <tr>
            <td class="infotype">학번</td>
            <td class="infoelement">{props.userList[0].schoolid}</td>
          </tr>
          <tr>
            <td class="infotype">생일</td>
            <td class="infoelement">{props.userList[0].birthday}</td>
          </tr>
          <tr>
            <td class="infotype">이메일</td>
            <td class="infoelement">{props.userList[0].email}</td>
          </tr>
          <tr>
            <td class="infotype">전화번호</td>
            <td class="infoelement">{props.userList[0].phone}</td>
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
