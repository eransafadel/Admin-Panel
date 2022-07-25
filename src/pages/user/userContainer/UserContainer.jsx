import { Publish } from '@material-ui/icons';
import React from 'react';
import UserShowBottom from '../userShowBottom/UserShowBottom';
import UserShowTop from '../userShowTop/UserShowTop';
import "./userContainer.css";
import UserUpdate from './userUpdate/UserUpdate';

const UserContainer = () => {
  return (
    <div className="userContainer">
    <div className="userShow">
        <UserShowTop/>
        <UserShowBottom/>
    </div>
    <UserUpdate/>
  </div>
  )
}

export default UserContainer;