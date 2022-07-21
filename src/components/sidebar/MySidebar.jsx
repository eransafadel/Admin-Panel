import React from "react";
import "./mySidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";

import items from "../data/data";
import SidebarBuilder from "./SidebarBuilder";
const MySidebar = () => {
//   const myItem = [
//     { icon: LineStyle, name: "Home" },
//     { icon:Timeline, name: "Analytics" },
//     { icon:TrendingUp, name: "Sales" },
//   ];
console.log(items);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {items.map((n,index)=> <SidebarBuilder key={index} Item={n.item} title={n.title}/>)}
      </div>
    </div>
  );
};

export default MySidebar;
