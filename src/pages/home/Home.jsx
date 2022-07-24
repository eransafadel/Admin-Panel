import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../data/dummyData";
import MyChart from "../../components/chart/MyChart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <MyChart
        title="User Analytics"
        data={userData}
        dataKey="Active User"
        grid={true}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
