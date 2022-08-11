import React, { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../data/dummyData";
import MyChart from "../../components/chart/MyChart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css";
import { userRequest } from "../../api/requestMethods";


class userStats {
  name;
  active;

  constructor(name,active) { 
    this.name = name;
    this.active = active;

 } 
} 


const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,{name: MONTHS[item._id-1],"Active User": item.total}
         
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
   
console.log("userStats",userStats);


  return (
    <div className="home">
      <FeaturedInfo />
      <MyChart
        title="User Analytics"
        data={userStats}
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
