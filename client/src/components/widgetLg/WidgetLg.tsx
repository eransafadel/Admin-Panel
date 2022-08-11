import "./widgetLg.css";
import {data,CostumerDataInfo} from "./data/data";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../api/requestMethods";
import{format} from "timeago.js";


export interface BasicUserInfo {
  username: string;
  image:string

}



const WidgetLg = () => {
  const Button: React.FC<{type:string}>=({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [orders,setOrders] = useState([]);
  useEffect(()=>{
    const getOrders = async()=>{
      try{
      const resOrders = await userRequest.get("orders");
      setOrders(resOrders.data);
    
      }
      catch{

      }
    };

    getOrders();

  },[orders]); 




  
  const itemsOrders = orders.map((n:CostumerDataInfo, index:number) => (
    <tr key={index} className="widgetLgTr">
     
      <td className="widgetLgUser">
        <img src={n.image} alt="" className="widgetLgImg" />
        <span className="widgetLgName">{n.username}</span>
      </td>
      <td className="widgetLgDate">{format(n.createdAt)}</td>
      <td className="widgetLgAmount">${n.amount}</td>
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
        {itemsOrders}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
