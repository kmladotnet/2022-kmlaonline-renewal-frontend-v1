import React from "react";
import { Editor } from "@toast-ui/react-editor";
import UserPageNav from "../../components/Navigation/UserPageNav";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "./PostWrite.css";

const PostWrite = () => {
  return (
    <>
      <UserPageNav />
      <div className="white-background">
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          language="ko-KR"
        />
      </div>
    </>
  );
};

export default PostWrite;
