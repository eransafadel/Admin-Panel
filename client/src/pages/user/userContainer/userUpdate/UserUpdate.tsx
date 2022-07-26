import React from 'react';
import UserUpdateItem from "./userUpdateItem/UserUpdateItem";
import "./userUpdate.css";
import UserUpdateRight from './userUpdateRight/UserUpdateRight';
import UserUpdateLeft from './userUpdateLeft/UserUpdateLeft';

const UserUpdate = () => {
  return (
    <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <UserUpdateLeft/>
            <UserUpdateRight/>
          </form>
        </div>
  )
}

export default UserUpdate;