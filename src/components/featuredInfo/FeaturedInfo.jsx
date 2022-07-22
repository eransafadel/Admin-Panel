import React from "react";
import items from "./data/data";
import "./featuredInfo.css";
import FeaturedInfoBuilder from "./FeaturedInfoBuilder";
const FeaturedInfo = () => {
console.log("data is:",items);

  return (
    <div className="featured">
        {items.map((n, index)=><FeaturedInfoBuilder key ={index} item={n}/> )}
    </div>
  );
};

export default FeaturedInfo;
