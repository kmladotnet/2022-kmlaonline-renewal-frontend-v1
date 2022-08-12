import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import UserPageNav from "../../components/Navigation/UserPageNav";
import UserInfo from "../../components/UserProfile/UserInfo";

const UserPage = () => {
  const id = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {}, [user]);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/${id.id}`)
      .then((response) => {
        setUser(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <UserPageNav />
      <UserInfo userList={user} />
    </React.Fragment>
  );
};

export default UserPage;
