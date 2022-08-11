import React from 'react';
import {dataInfo} from "../../data/data";
import "./userShowTop.css";

const UserShowTop = () => {
  return (
    <div className="userShowTop">
    <img
      src={dataInfo.image}
      alt=""
      className="userShowImg"
    />
    <div className="userShowTopTitle">
      <span className="userShowUsername">{dataInfo.fullname}</span>
      <span className="userShowUserTitle">{dataInfo.job}</span>
    </div>
  </div>
  )
}

export default UserShowTop;