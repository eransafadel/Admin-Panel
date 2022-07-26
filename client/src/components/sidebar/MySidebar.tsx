import React from "react";
import "./mySidebar.css";

import {items,SideBarData} from "./data/data";
import SidebarBuilder from "./SidebarBuilder";
const MySidebar = () => {
  const data = items.map((n:SideBarData, index:number) => (
    <SidebarBuilder key={index} item={n.item} title={n.title} />
  ));

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">{data}</div>
      <div className="bottom">
        <div
          className="colorOption"
          // onClick={""
          //  // () => dispatch({ type: "LIGHT" })
          // }
        ></div>
        <div
          className="colorOption"
          // onClick={""
          //   //() => dispatch({ type: "DARK" })
          // }
        ></div>
      </div>
    </div>
  );
};

export default MySidebar;
