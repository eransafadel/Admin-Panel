import React from 'react';
import {data} from "../../data/data";
import "./userShowTop.css";

const UserShowTop = () => {
  return (
    <div className="userShowTop">
    <img
      src={data.image}
      alt=""
      className="userShowImg"
    />
    <div className="userShowTopTitle">
      <span className="userShowUsername">{data.fullname}</span>
      <span className="userShowUserTitle">{data.job}</span>
    </div>
  </div>
  )
}

export default UserShowTop;