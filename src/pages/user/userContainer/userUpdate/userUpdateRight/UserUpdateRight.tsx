import React from 'react';
import { Publish } from '@material-ui/icons';
import "./userUpdateRight.css";
import {dataInfo} from "../../../../data/data";

const UserUpdateRight = () => {
  return (
    <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={dataInfo.image}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
  )
}

export default UserUpdateRight