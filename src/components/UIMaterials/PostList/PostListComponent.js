import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import "./PostListComponent.css";

import CommonTable from "../Table/CommonTable";
import CommonTableColumn from "../Table/CommonTableColumn";
import CommonTableRow from "../Table/CommonTableRow";

import TableComponent from "../Table/TableComponent/TableComponent";

const PostListComponent = (props) => {
  const { page } = useParams();
  const [postData, setPostData] = useState([]);
  var type = "";

  const toPostDetail = () => {
    window.location.href = "/";
  };
  // fetch data from localhost:8800/api/announcements/1 using axios

  const onClickPrevPage = () => {
    window.location.href = `/${props.type}/${parseInt(page) - 1}`;
  };

  const onClickNextPage = () => {
    window.location.href = `/${props.type}/${parseInt(page) + 1}`;
  };

  useEffect(() => {
    axios.get(`http://localhost:8800/api/announcements/${page}`).then((res) => {
      setPostData(res.data);
    });
  }, [postData]);

  if (page === "1") {
    if (postData.length !== 10) {
      var buttons = <div className="page-navigation"></div>;
    } else if (postData.length === 10) {
      var buttons = (
        <div className="page-navigation">
          <button onClick={onClickNextPage} className="right-nav-button">
            다음 페이지
          </button>
        </div>
      );
    }
  } else {
    if (postData.length !== 10) {
      var buttons = (
        <div className="page-navigation">
          <button onClick={onClickPrevPage} className="left-nav-button">
            이전 페이지
          </button>
        </div>
      );
    } else {
      var buttons = (
        <div className="page-navigation">
          <button onClick={onClickPrevPage} className="left-nav-button">
            이전 페이지
          </button>
          <button onClick={onClickNextPage} className="right-nav-button">
            다음 페이지
          </button>
        </div>
      );
    }
  }

  const onClickPost = (id) => {
    window.location.href = `/post/${id}`;
  }



  const postList = postData.map((menu) => <TableComponent data={menu} />);

  return (
    <>
      <CommonTable
        headersName={["글번호", "제목", "등록일", "조회수", "작성자"]}
      >
        {postList}
      </CommonTable>
      {buttons}
    </>
  );
};

export default PostListComponent;
