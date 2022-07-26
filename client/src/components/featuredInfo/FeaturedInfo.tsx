import React from "react";
import {items,FeaturedData} from "./data/data";
import "./featuredInfo.css";
import FeaturedInfoBuilder from "./FeaturedInfoBuilder";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      {items.map((n:FeaturedData, index:number) => (
        <FeaturedInfoBuilder key={index} item={n} />
      ))}
    </div>
  );
};

export default FeaturedInfo;
