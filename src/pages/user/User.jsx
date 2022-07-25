
import React from "react";
import "./user.css";
import UserContainer from "./userContainer/UserContainer";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <UserContainer/>
    </div>
  );
};

export default User;
