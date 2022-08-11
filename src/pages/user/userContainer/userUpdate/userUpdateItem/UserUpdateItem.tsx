import React from 'react';
import "./userUpdateItem.css";

const UserUpdateItem:React.FC<{title:string,value:string}> = ({title,value}) => {
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