import React from 'react';
import { CalendarToday, MailOutline, PhoneAndroid,PermIdentity,LocationSearching } from "@material-ui/icons";
import {data} from "../../data/data";
import "./userShowBottom.css";

const UserShowBottom = () => {
  return (
    <div className="userShowBottom">
    <span className="userShowTitle">Account Details</span>
    <div className="userShowInfo">
      <PermIdentity className="userShowIcon" />
      <span className="userShowInfoTitle">{data.username}</span>
    </div>
    <div className="userShowInfo">
      <CalendarToday className="userShowIcon" />
      <span className="userShowInfoTitle">{data.dob}</span>
    </div>
    <span className="userShowTitle">Contact Details</span>
    <div className="userShowInfo">
      <PhoneAndroid className="userShowIcon" />
      <span className="userShowInfoTitle">{data.phone}</span>
    </div>
    <div className="userShowInfo">
      <MailOutline className="userShowIcon" />
      <span className="userShowInfoTitle">{data.mail}</span>
    </div>
    <div className="userShowInfo">
      <LocationSearching className="userShowIcon" />
      <span className="userShowInfoTitle">{data.location}</span>
    </div>
  </div>
  )
}

export default UserShowBottom