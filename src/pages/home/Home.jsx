import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../data/dummyData";
import MyChart from "../../components/chart/MyChart";
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
    </div>
  );
};

export default Home;
