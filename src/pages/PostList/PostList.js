import React from "react";
import { useParams } from "react-router-dom";
import PostListComponent from "../../components/UIMaterials/PostList/PostListComponent";
import UserPageNav from "../../components/Navigation/UserPageNav";

import "./PostList.css";

const onClickWritePost = () => {
  window.location.href = "/writepost/announcements";
};

const PostList = (props) => {
  const { page } = useParams();
  var type = "";

  const onClickPrevPage = () => {
    window.location.href = `/${props.type}/${parseInt(page) - 1}`;
  };

  const onClickNextPage = () => {
    window.location.href = `/${props.type}/${parseInt(page) + 1}`;
  };

  if (props.type === "announcements") {
    type = "공지 게시판";
  }

  return (
    <>
      <UserPageNav />
      <div className="postlist">
        <div className="title-button-container">
          <label className="post-title">{type}</label>
          <button onClick={onClickWritePost} className="write-post-button">
            글 작성
          </button>
        </div>
        <PostListComponent />
        <div className="page-navigation">
          {page > 1 && (
            <button className="left-nav-button" onClick={onClickPrevPage}>
              이전 페이지
            </button>
          )}
          <button className="right-nav-button" onClick={onClickNextPage}>
            다음 페이지
          </button>
        </div>
      </div>
    </>
  );
};

export default PostList;
