import Reac from "react";

import CommonTable from "../Table/CommonTable";
import CommonTableColumn from "../Table/CommonTableColumn";
import CommonTableRow from "../Table/CommonTableRow";

import TableComponent from "../Table/TableComponent/TableComponent";

const PostListComponent = () => {
  const toPostDetail = () => {
    window.location.href = "/";
  };
  const datas = [
    {
      num: 1,
      title: "첫번째 게시글",
      date: "2022-01-01",
      view: 1,
      writer: "김진호",
      writerId: 211033,
    },
    {
      num: 2,
      title: "두번째 게시글",
      date: "2022-01-02",
      view: 10,
      writer: "유재석",
      writerId: 211032,
    },
    {
      num: 3,
      title: "세번째 게시글",
      date: "2022-01-03",
      view: 100,
      writer: "주호민",
      writerId: 211034,
    },
  ];
  const postList = datas.map((menu) => <TableComponent data={menu} />);

  return (
    <>
      <CommonTable
        headersName={["글번호", "제목", "등록일", "조회수", "작성자"]}
      >
        {postList}
      </CommonTable>
    </>
  );
};

export default PostListComponent;
