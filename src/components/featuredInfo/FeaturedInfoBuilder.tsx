import React from "react";
import "./FeaturedInfoBuilder.css";
import {FeaturedData} from "./data/data";

const FeaturedInfoBuilder:React.FC<{item:FeaturedData}> = ({ item }) => {
  const { featuredTitle, featuredMoney, featuredMoneyRate, Icon, featuredSub } =
    item;
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{featuredTitle}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">{featuredMoney}</span>
        <span className="featuredMoneyRate">
          {featuredMoneyRate}
          <Icon
            className={`featuredIcon ${
              featuredMoneyRate > 0 ? "positive" : "negative"
            }`}
          />
        </span>
      </div>
      <span className="featuredSub">{featuredSub}</span>
    </div>
  );
};

export default FeaturedInfoBuilder;
