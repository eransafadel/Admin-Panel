import "./widgetLg.css";
import {data,CostumerDataInfo} from "./data/data";
import React from "react";

const WidgetLg = () => {
  const Button: React.FC<{type:string}>=({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  
  const items = data.map((n:CostumerDataInfo, index:number) => (
    <tr key={index} className="widgetLgTr">
      <td className="widgetLgUser">
        <img src={n.image} alt="avatar image" className="widgetLgImg" />
        <span className="widgetLgName">{n.username}</span>
      </td>
      <td className="widgetLgDate">{n.date}</td>
      <td className="widgetLgAmount">{n.amount}</td>
      <td className="widgetLgStatus">
        <Button type={n.status} />
      </td>
    </tr>
  ));

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
      <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {items}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
