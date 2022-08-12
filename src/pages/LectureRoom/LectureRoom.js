import React from "react";

import UserPageNav from "../../components/Navigation/UserPageNav";
import LectureRoomSelector from "../../components/UIMaterials/LectureRoomSelector/LectureRoomSelector";

const LectureRoom = () => {
  return (
    <React.Fragment>
      <UserPageNav />
      <LectureRoomSelector />
    </React.Fragment>
  );
};

export default LectureRoom;
