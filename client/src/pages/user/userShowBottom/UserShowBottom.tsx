import React from 'react';
import { CalendarToday, MailOutline, PhoneAndroid,PermIdentity,LocationSearching } from "@material-ui/icons";
import {dataInfo} from "../../data/data";
import "./userShowBottom.css";

const UserShowBottom = () => {
  return (
    <div className="userShowBottom">
    <span className="userShowTitle">Account Details</span>
    <div className="userShowInfo">
      <PermIdentity className="userShowIcon" />
      <span className="userShowInfoTitle">{dataInfo.username}</span>
    </div>
    <div className="userShowInfo">
      <CalendarToday className="userShowIcon" />
      <span className="userShowInfoTitle">{dataInfo.dob}</span>
    </div>
    <span className="userShowTitle">Contact Details</span>
    <div className="userShowInfo">
      <PhoneAndroid className="userShowIcon" />
      <span className="userShowInfoTitle">{dataInfo.phone}</span>
    </div>
    <div className="userShowInfo">
      <MailOutline className="userShowIcon" />
      <span className="userShowInfoTitle">{dataInfo.mail}</span>
    </div>
    <div className="userShowInfo">
      <LocationSearching className="userShowIcon" />
      <span className="userShowInfoTitle">{dataInfo.location}</span>
    </div>
  </div>
  )
}

export default UserShowBottom