import React from 'react';
import data from "../../data/data";
import UserUpdateItem from "./userUpdateItem/UserUpdateItem";
import "./userUpdate.css";
import UserUpdateRight from './userUpdateRight/UserUpdateRight';

const UserUpdate = () => {
  return (
    <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
            
              <UserUpdateItem title="Username" value={data.username}/>
              <UserUpdateItem title="Full Name" value={data.fullname}/>
              <UserUpdateItem title="Email" value={data.mail}/>
              <UserUpdateItem title="Phone" value={data.phone}/>
              <UserUpdateItem title="Address" value={data.location}/>
            
            </div>
            <UserUpdateRight/>
          </form>
        </div>
  )
}

export default UserUpdate;