import React from "react";
import "./sidebarBuilder.css";

const SidebarBuilder = ({ Item, title }) => {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        {Item.map((n, index) => {
          const Icon = n.icon;
          const name = n.name;

          return (
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
