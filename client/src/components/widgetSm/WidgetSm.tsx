import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {data,BasicMemberUserInfo} from "./data/data";



const WidgetSm = () => {
  const items = data.map((n:BasicMemberUserInfo, index:number) => (
    <li key={index} className="widgetSmListTitle">
      <img src={n.image} alt="avatar" className="widgetSmImg" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{n.username}</span>
        <span className="widgetSmUserTitle">{n.job}</span>
      </div>
      <button className="widgetSmButton">
        <Visibility className="widgetSmIcon" />
        Display
      </button>
    </li>
  ));

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">{items}</ul>
    </div>
  );
};

export default WidgetSm;
