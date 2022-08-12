import React from 'react';

import './LectureRoomTable.css';

const LectureRoomTable = (props) => {
    //console.log(props.day)
    return (
        <div className="info">
        <table className="roomtable">
          <thead>
            <tr>
              <th className="date-title">날짜</th>
              <th className="time-title">시간</th>
              <th className="place-title">장소</th>
              <th className="person-title">신청자</th>
              <th className="assign-room">신청하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="date" rowSpan="8">
                날짜
              </td>
              <td className="period" rowSpan="4">
                1자습 (19:00 ~ 21:00)
              </td>
              <td className="content">지하 혼정실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">2층 혼정실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">4층 공동강의실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">10층 공동강의실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="period" rowSpan="4">
                2자습 (22:00 ~ 23:50)
              </td>
              <td className="content">지하 혼정실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">2층 혼정실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">4층 공동강의실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td className="content">10층 공동강의실</td>
              <td className="content"></td>
              <td className="button-form">
                <button className="button">신청하기</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default LectureRoomTable;