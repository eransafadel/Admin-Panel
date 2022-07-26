import React from 'react';
import "./userUpdateItem.css";

const UserUpdateItem = ({title,value}) => {
  return (
    <div className="userUpdateItem">
    <label>{title}</label>
    <input
      type="text"
      placeholder={value}
      className="userUpdateInput"
    />
  </div>
  )
}

export default UserUpdateItem