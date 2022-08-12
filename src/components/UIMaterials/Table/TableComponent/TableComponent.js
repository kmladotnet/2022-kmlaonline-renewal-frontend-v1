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
        <CommonTableColumn>{props.data.date}</CommonTableColumn>
        <CommonTableColumn>{props.data.view}</CommonTableColumn>
        <CommonTableColumn>{props.data.writer}</CommonTableColumn>
      </CommonTableRow>
    </>
  );
};

export default TableComponent;
