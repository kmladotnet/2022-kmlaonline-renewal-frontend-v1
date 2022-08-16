import React from "react";

import CommonTable from "../CommonTable";
import CommonTableColumn from "../CommonTableColumn";
import CommonTableRow from "../CommonTableRow";

const TableComponent = (props) => {
  return (
    <>
      <CommonTableRow>
        <CommonTableColumn>{props.data.num}</CommonTableColumn>
        <CommonTableColumn>{props.data.title}</CommonTableColumn>
        <CommonTableColumn>{props.data.uploadDate}</CommonTableColumn>
        <CommonTableColumn>{props.data.views}</CommonTableColumn>
        <CommonTableColumn>{props.data.uploader}</CommonTableColumn>
      </CommonTableRow>
    </>
  );
};

export default TableComponent;
