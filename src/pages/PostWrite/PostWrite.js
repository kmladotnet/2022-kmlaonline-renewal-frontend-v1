import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import UserPageNav from "../../components/Navigation/UserPageNav";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "./PostWrite.css";
import axios from "axios";

const PostWrite = () => {
  const [postData, setPostData] = useState("");
  const [title, setTitle] = useState("");
  const { type } = useParams();
  const editorRef = useRef();

  const userData = JSON.parse(
    localStorage.getItem("account") || sessionStorage.getItem("account")
  );

  console.log(userData);
  useEffect(() => {
    console.log(postData);
  }, [postData]);

  useEffect(() => {
    console.log(title);
  }, [title]);

  const onValueChange = () => {
    setPostData(editorRef.current.getInstance().getMarkdown());
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onClickCancel = () => {
    window.location.href = `/${type}/1`;
  };

  const onClickPost = () => {
    var currentDate = new Date();
    var date =
      currentDate.getFullYear().toString() +
      "-" +
      ("0" + (currentDate.getMonth() + 1).toString()).slice(-2) +
      "-" +
      ("0" + currentDate.getDate().toString()).slice(-2);
    axios
      .post(`http://localhost:8800/api/${type}`, {
        title: title,
        uploader: userData.name,
        uploadDate: date,
        uploaderSchoolId: userData.schoolId,
        content: postData,
        dislikes: 0,
        likes: 0,
        views: 0,
        type: type,
      })
    //navigate to /announcements/1
    window.location.href = `/${type}/1`;
  };

  return (
    <>
      <UserPageNav />
      <div className="white-background">
        <h1>글 작성하기</h1>
        <input
          type="text"
          className="postwrite-title"
          value={title}
          onChange={onTitleChange}
        ></input>
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          language="ko-KR"
          onChange={onValueChange}
          ref={editorRef}
        />
        <div className="buttons">
          <button className="cancel-button" onClick={onClickCancel}>
            취소
          </button>
          <button className="post-button" onClick={onClickPost}>
            게시하기
          </button>
        </div>
      </div>
    </>
  );
};

export default PostWrite;
