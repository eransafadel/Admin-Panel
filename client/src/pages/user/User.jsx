import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import UserContainer from "./userContainer/UserContainer";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
      
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <UserContainer />
    </div>
  );
};

export default User;
