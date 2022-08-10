import React,{useState,useEffect} from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {data,BasicMemberUserInfo} from "./data/data";
import { userRequest } from "../../api/requestMethods";



const WidgetSm = () => {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async()=>{
      try{
      const res = await userRequest.get("users/?new=true");
      setUsers(res.data);
      }
      catch{

      }
    };

    getUsers();

  },[users])

  const items = users.map((n:BasicMemberUserInfo, index:number) => (
    <li key={index} className="widgetSmListTitle">
      <img src={n.image} alt="avatar" className="widgetSmImg" />
      <div className="widgetSmUser">
        <span className="widgetSmUsername">{n.username}</span>
        {/* <span className="widgetSmUserTitle">{n.job}</span> */}
      </div>
      <button className="widgetSmButton">
        <Visibility className="widgetSmIcon" />
        Display
      </button>
    </li>
  ));

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">{items}</ul>
    </div>
  );
};

export default WidgetSm;
