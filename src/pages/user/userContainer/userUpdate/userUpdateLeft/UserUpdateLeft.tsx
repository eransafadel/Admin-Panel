import React from 'react';
import {dataInfo} from "../../../../data/data";
import UserUpdateItem from '../userUpdateItem/UserUpdateItem';

const UserUpdateLeft = () => {
  return (
    <div className="userUpdateLeft">
            
    <UserUpdateItem title="Username" value={dataInfo.username}/>
    <UserUpdateItem title="Full Name" value={dataInfo.fullname}/>
    <UserUpdateItem title="Email" value={dataInfo.mail}/>
    <UserUpdateItem title="Phone" value={dataInfo.phone}/>
    <UserUpdateItem title="Address" value={dataInfo.location}/>
  
  </div>
  )
}

export default UserUpdateLeft