import React from "react";

import './Searchbox.css'

const Searchbox = () => {
  return (
    <div className="searchbox">
      <input
        type = "text"
        className = "searchbox"
        placeholder = "검색어를 입력하세요"
      ></input>
    </div>
  );
};

export default Searchbox;
