import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import UserPageNav from "../../components/Navigation/UserPageNav";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "./PostWrite.css";

const PostWrite = () => {
  const [postData, setPostData] = useState("");
  const { type } = useParams();
  const editorRef = useRef();

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const onValueChange = () => {
    setPostData(editorRef.current.getInstance().getMarkdown());
  };

  const onClickCancel = () => {
    window.location.href = `/${type}/1`;
  }
  return (
    <>
      <UserPageNav />
      <div className="white-background">
        <h1>글 작성하기</h1>
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
          <button className="cancel-button" onClick = {onClickCancel}>취소</button>
          <button className="post-button">게시하기</button>
        </div>
      </div>
    </>
  );
};

export default PostWrite;
