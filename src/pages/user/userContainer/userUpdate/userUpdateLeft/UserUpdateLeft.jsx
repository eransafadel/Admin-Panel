import React from 'react';
import data from "../../../../data/data";
import UserUpdateItem from '../userUpdateItem/UserUpdateItem';

const UserUpdateLeft = () => {
  return (
    <div className="userUpdateLeft">
            
    <UserUpdateItem title="Username" value={data.username}/>
    <UserUpdateItem title="Full Name" value={data.fullname}/>
    <UserUpdateItem title="Email" value={data.mail}/>
    <UserUpdateItem title="Phone" value={data.phone}/>
    <UserUpdateItem title="Address" value={data.location}/>
  
  </div>
  )
}

export default UserUpdateLeft