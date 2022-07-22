import React from "react";
import "./mySidebar.css";

import items from "./data/data";
import SidebarBuilder from "./SidebarBuilder";
const MySidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {items.map((n, index) => (
          <SidebarBuilder key={index} Item={n.item} title={n.title} />
        ))}
      </div>
    </div>
  );
};

export default MySidebar;
