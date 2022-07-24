import React from "react";
import "./mySidebar.css";

import items from "./data/data";
import SidebarBuilder from "./SidebarBuilder";
const MySidebar = () => {

  const data = items.map((n, index) => (
    <SidebarBuilder key={index} item={n.item} title={n.title} />
  ));

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {data}
      </div>
    </div>
  );
};

export default MySidebar;
