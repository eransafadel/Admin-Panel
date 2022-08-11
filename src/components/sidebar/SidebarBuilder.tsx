import React from "react";
import { Link } from "react-router-dom";
import "./sidebarBuilder.css";
import {Item} from "./data/data"

const SidebarBuilder: React.FC<{item:Item[],title:string}> = ({ item, title }) => {
  return (
    <div className="sidebarMenu" >
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        {item.map((n, index) => {
          const Icon = n.icon;
          const name = n.name;
        
          
          return n.link ? (
            <Link to={n.link} className="link">
              <li key={index} className="sidebarListItem">
                <Icon />
                {name}
              </li>
            </Link>
          ) : (
            <li key={index} className="sidebarListItem">
              <Icon />
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarBuilder;
