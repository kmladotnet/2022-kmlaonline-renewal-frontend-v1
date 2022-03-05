import React from "react";

import "./LectureRoomTable.css";

const LectureRoomTable = () => {
  return (
    <div class="lectureroom-form">
      <div class="date-choice">
        <select name="date" required class="selectors">
          <option value="">날짜</option>
          <option value="monday">2022-03-07 월요일</option>
          <option value="tuesday">2022-03-08 화요일</option>
          <option value="wednesday">2022-03-09 수요일</option>
          <option value="thursday">2022-03-10 목요일</option>
          <option value="friday">2022-03-11 금요일</option>
          <option value="saturday">2022-03-12 토요일</option>
          <option value="sunday">2022-03-13 일요일</option>
        </select>
      </div>
      <div class="info">
        <table class="roomtable">
          <thead>
            <tr>
              <th class="date-title">날짜</th>
              <th class="time-title">시간</th>
              <th class="place-title">장소</th>
              <th class="person-title">신청자</th>
              <th class="assign-room">신청하기</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="date" rowspan="8">
                2022-03-03
              </td>
              <td class="period" rowspan="4">
                1자습 (19:00 ~ 21:00)
              </td>
              <td class="content">지하 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">2층 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">4층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">10층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="period" rowspan="4">
                2자습 (22:00 ~ 23:50)
              </td>
              <td class="content">지하 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">2층 혼정실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">4층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
            <tr>
              <td class="content">10층 공동강의실</td>
              <td class="content"></td>
              <td class="button-form">
                <button class="button">신청하기</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureRoomTable;