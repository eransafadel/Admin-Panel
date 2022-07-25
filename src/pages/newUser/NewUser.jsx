import React from 'react';
import "./newUser.css";
import NewUserItem from './newUserItem/NewUserItem';
import data from "../data/data";


const NewUser = () => {
    return (
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
          

            <NewUserItem title="Username" type="text" value={data.username} />
            <NewUserItem title="Full Name" type="text" value={data.fullname} />
            <NewUserItem title="Email" type="email" value={data.mail} />
            <NewUserItem title="Password" type="password" value={"password"} />
            <NewUserItem title="Phone" type="text" value={data.phone} />
            <NewUserItem title="Address" type="text" value={data.location} />
           
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
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