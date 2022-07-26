import React from "react";
import { Link } from "react-router-dom";
import "./sidebarBuilder.css";

const SidebarBuilder = ({ item, title }) => {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">
        {item.map((n, index) => {
          const Icon = n.icon;
          const name = n.name;
          // const item = (
          //   <li key={index} className="sidebarListItem">
          //     <Icon />
          //     {name}
          //   </li>
          // );
          
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
