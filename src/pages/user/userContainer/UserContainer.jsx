import React from 'react';
import UserShowBottom from '../userShowBottom/UserShowBottom';
import UserShowTop from '../userShowTop/UserShowTop';
import "./userContainer.css";

const UserContainer = () => {
  return (
    <div className="userContainer">
    <div className="userShow">
        <UserShowTop/>
        <UserShowBottom/>
    </div>
    <div className="userUpdate"></div>
  </div>
  )
}

export default UserContainer;