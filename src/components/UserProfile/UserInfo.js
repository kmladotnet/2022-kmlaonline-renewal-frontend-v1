import React from "react";

import "./UserInfo.css";
import profile from "../../assets/images/profile.png";

const UserInfo = (props) => {
  var birthdayDisplay = "" + props.userList.birthday;
  return (
    <div className="profile-form">
      <div className="top-elements">
        <img src={profile} className="profile-picture" alt="profile pic"></img>
        <div className="name">
          <label className="korean-name">{props.userList.name} &nbsp;</label>
          <br></br>
          <label className="comment">{props.userList.introduction}</label>
        </div>
      </div>
      <div className="info">
        <table border="0" className="infotable">
          <tr>
            <td className="infotype">학번</td>
            <td className="infoelement">{props.userList.schoolId}</td>
          </tr>
          <tr>
            <td className="infotype">생일</td>
            <td className="infoelement">{birthdayDisplay.substring(0, 10)}</td>
          </tr>
          <tr>
            <td className="infotype">이메일</td>
            <td className="infoelement">{props.userList.email}</td>
          </tr>
          <tr>
            <td className="infotype">전화번호</td>
            <td className="infoelement">{props.userList.contact}</td>
          </tr>
          <tr>
            <td className="infotype">글 수</td>
            <td className="infoelement">0개</td>
          </tr>
          <tr>
            <td className="infotype">댓글 수</td>
            <td className="infoelement">0개</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
