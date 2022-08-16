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
  if (props.type === "announcements") {
    type = "공지 게시판";
  }

  console.log(type);

  return (
    <>
      <UserPageNav />
      <div className="postlist">
        <div className="title-button-container">
          <label className="post-title">{type} - {page} 페이지</label>
          <button onClick={onClickWritePost} className="write-post-button">
            글 작성
          </button>
        </div>
        <PostListComponent type = {props.type}/>
      </div>
    </>
  );
};

export default PostList;
