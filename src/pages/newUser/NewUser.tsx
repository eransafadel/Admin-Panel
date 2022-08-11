import React from 'react';
import "./newUser.css";
import NewUserItem from './newUserItem/NewUserItem';
import {dataInfo} from "../data/data";


const NewUser = () => {
    return (
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
          

            <NewUserItem title="Username" type="text" value={dataInfo.username} />
            <NewUserItem title="Full Name" type="text" value={dataInfo.fullname} />
            <NewUserItem title="Email" type="email" value={dataInfo.mail} />
            <NewUserItem title="Password" type="password" value={"password"} />
            <NewUserItem title="Phone" type="text" value={dataInfo.phone} />
            <NewUserItem title="Address" type="text" value={dataInfo.location} />
           
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newUserButton">Create</button>
          </form>
        </div>
      );
}

export default NewUser;