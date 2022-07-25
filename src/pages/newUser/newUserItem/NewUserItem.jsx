import React from 'react';
import "./newUserItem.css";

const NewUserItem = ({title,type,value}) => {
  return (
    <div className="newUserItem">
    <label>{title}</label>
    <input type={type} placeholder={value} />
  </div>
  )
}

export default NewUserItem;