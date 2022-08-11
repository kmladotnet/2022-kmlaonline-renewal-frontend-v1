import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./Register.css";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [waver, setWaver] = useState(0);
  const [name, setName] = useState("");
  const [engName, setEngName] = useState("");
  const [schoolId, setSchoolId] = useState(null);
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [responseStatus, setResponseStatus] = useState(0);

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  
  const onChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeEngName = (e) => {
    setEngName(e.target.value);
  }

  const onChangeWaver = (e) => {
    setWaver(e.target.value);
  }

  const onChangeSchoolId = (e) => {
    setSchoolId(e.target.value);
  }

  const onChangeGender = (e) => {
    setGender(e.target.value);
  }

  const onChangeBirthday = (e) => {
    setBirthday(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangeContact = (e) => {
    setContact(e.target.value);
  }

  const onChangeInterest = (e) => {
    setInterest(e.target.value);
  }

  const onChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  }

  const registerUser = async () => {
    await axios
    .post("http://localhost:8800/api/auth/register", {
      username: id,
      email: email,
      password: password,
      waver: waver,
      schoolId: schoolId,
      birthday: birthday,
      contact: contact,
      isAdmin: false,
      comments: 0,
      posts: 0,
      name: name,
      englishName: engName,
      gender: gender,
      interest: interest,
      introduction: introduction
    })
    .then((response) => {
      var responseCode = response.status;
      setResponseStatus(responseCode);
      console.log(response);
      alert("회원가입 완료")
    })
    .catch((error) => {
      console.log(error);
      setResponseStatus(error.response.status);
    });
  }

  const onClickRegister = async (e) => {
    e.preventDefault();
    if (password === checkPassword) {
        registerUser();
    } else {
        alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    }
  }

  useEffect(() => {
    console.log(waver);
  }, [waver]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(engName);
  }, [engName]);

  useEffect(() => {
    console.log(schoolId);
  }, [schoolId]);

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  useEffect(() => {
    console.log(checkPassword);
  }, [checkPassword]);

  useEffect(() => {
    console.log(birthday);
  }, [birthday]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  useEffect(() => {
    console.log(interest);
  }, [interest]);

  useEffect(() => {
    console.log(introduction);
  }, [introduction]);

  useEffect(async () => {
    if (responseStatus === 200) {
        alert("계정이 생성되었습니다.");
        window.location.href = "/login";
    } else if (responseStatus === 500) {
        window.location.href = "/register";
    }
  }, [responseStatus])

  return (
    <div className="login-form">
      <form>
        <h2 className="regi">회원가입</h2>
        <input
          type="text"
          name="name"
          className="text-field"
          placeholder="이름"
          required
          value = {name}
          onChange = {onChangeName}
        ></input>
        <input
          type="text"
          name="name"
          className="text-field"
          placeholder="영어 이름"
          required
          value = {engName}
          onChange = {onChangeEngName}
        ></input>
        <select name="waver" required className="selectors" onChange = {onChangeWaver}>
          <option value="" disabled selected>
            기수
          </option>
          <option value={27}>27기</option>
          <option value={26}>26기</option>
          <option value={25}>25기</option>
          <option value={100}>졸업생</option>
          <option value={1}>교사</option>
        </select>
        <input
          type="number"
          name="schoolid"
          className="text-field"
          placeholder="학번"
          required
          value = {schoolId}
          onChange = {onChangeSchoolId}
        ></input>
        <input
          type="text"
          name="id"
          className="text-field"
          placeholder="아이디"
          required
          value = {id}
          onChange = {onChangeId}
        ></input>
        <input
          type="password"
          name="password"
          className="text-field"
          placeholder="비밀번호"
          required
          value = {password}
          onChange = {onChangePassword}
        ></input>
        <input
          type="password"
          name="password_check"
          className="text-field"
          placeholder="비밀번호 확인"
          required
          value = {checkPassword}
          onChange = {onChangeCheckPassword}
        ></input>
        <select name="gender" required className="selectors" value = {gender} onChange = {onChangeGender}>
          <option value="">성별</option>
          <option value="men">남자</option>
          <option value="women">여자</option>
          <option value="othergender">기타</option>
        </select>
        {/*
        <input
          type="date"
          name="birthday"
          className="text-field"
          value="생일"
          required
        ></input>
        */}
        <input
          placeholder="생일 (YYYY-MM-DD)"
          className="text-field"
          type="text"
          id="birthday"
          required
          value = {birthday}
          onChange = {onChangeBirthday}
        ></input>
        <input
          type="email"
          name="email"
          className="text-field"
          placeholder="이메일 (example@xyz.com)"
          required
          value = {email}
          onChange = {onChangeEmail}
        ></input>
        <br></br>
        <input
          type="tel"
          name="phonenumber"
          className="text-field"
          placeholder="전화번호 (ex. 01012345678)"
          required
          value = {contact}
          onChange = {onChangeContact}
        ></input>
        <input
          type="text"
          name="interest"
          className="text-field"
          placeholder="관심사/전공"
          required
          value = {interest}
          onChange = {onChangeInterest}
        ></input>
        <input
          type="text"
          name="words"
          className="text-field"
          placeholder="소개글"
          required
          value = {introduction}
          onChange = {onChangeIntroduction}
        ></input>
        <div className="scrollBox">
          <div className="scrollText" tabindex="0">
            <strong>1. 개인정보의 수집항목</strong>
            <br></br>
            KMLA ONLINE의 제작자, 관리자(이하 KMLA .NET)는 홈페이지 회원 가입 시
            회원 서비스 제공에 필요한 최소한의 정보를 수집하고 있으며
            개인정보파일에 수집되는 항목은 다음과 같습니다.<br></br>- 이름,
            아이디, 연락처, 이메일, 생년월일<br></br>
            <br></br>
            <strong>2. 개인정보 수집목적</strong>
            <br></br>
            KMLA .NET이 제공하는 맞춤화된 서비스(교내 컨텐츠 제공, 각종 편의기능
            등) 및 개발(사전조사 및 만족도 설문조사 등)을 위해 수집합니다. KMLA
            .NET은 원칙적으로 이용자의 개인정보를 수집 및 이용 목적범위 내에서
            처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여
            처리하거나 제3자에게 제공하지 않습니다.<br></br>
            <br></br>
            가. 회원관리<br></br>
            회원 맞춤 서비스 제공, 개인식별, 전체 서비스의 원활한 운영을 위한
            관리, 회원탈퇴 의사 확인<br></br>
            <br></br>
            나. 고유서비스 이용 및 신규 개발<br></br>
            예술경영지원센터에서 제공하는 컨설팅을 비롯한 각종 고유 서비스
            제공의 필요 시, 신규 서비스 개발 시 의견수렴 및 안내<br></br>
            <br></br>
            3. 개인정보의 보유기간<br></br>- 홈페이지 회원가입에 따라 수집된
            개인정보 보유기간은 <span className="point">탈퇴 이전까지</span>
            입니다.
            <br></br>
            <br></br>
            4. 기타사항(거부할 권리 등)<br></br>- 회원가입에 따른 개인정보의
            수집, 이용, 제공에 대해 귀하께서 동의하신 내용은 언제든지 철회 또는
            거부하실 수 있습니다. 이의 경우 회원탈퇴로 처리되며 동의철회(거부)는
            「회원탈퇴」를 클릭하거나 개인정보관리담당(책임자)에게 서면, 전화,
            이메일 등으로 연락하시면 즉시 개인정보의 삭제 및 파기 등 필요한
            조치를 하겠습니다.<br></br>- 개인정보제공 동의 거부에 의한 홈페이지
            이용 제한<br></br>
            <br></br>
            <br></br>
            기타 개인정보에 관한 상담 및 문의가 필요한 경우에는
            개인정보침해신고센터 등으로 문의하실 수 있습니다.<br></br>
            <br></br>
            <div className="member_box">
              • 한국인터넷진흥원 개인정보침해신고센터 (www.1336.or.kr / 118)
              <br></br>• 정보보호마크인증위원회 (www.eprivacy.or.kr /
              02-580-0533~4)<br></br>• 경찰청 사이버테러대응센터 (www.ctrc.go.kr
              / 182)
            </div>
            <br></br>
            <div className="contacts">
              &copy; 2022 KMLA .NET, KMLA ONLINE, 김진호
            </div>
          </div>
        </div>
        <input type="button" value="회원가입" className="submit-btn" onClick={onClickRegister}></input>
      </form>
    </div>
  );
};

export default Register;
