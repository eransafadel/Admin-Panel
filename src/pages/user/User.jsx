import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEUjmnD7Lggvw/profile-displayphoto-shrink_800_800/0/1602768957092?e=1664409600&v=beta&t=IrRlvS7KCa2n6IvxpELyNPdfvuDZbGYhH75mAbsdDaM" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Eran Safadel</span>
                    <span className="userShowUserTitle">Programmer</span>
                </div>
            </div>
            <div className="userShowBottom">
               
            </div>
          </div>
          <div className="userUpdate"></div>
        
      </div>
    </div>
  );
};

export default User;
