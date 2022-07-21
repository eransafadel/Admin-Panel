import React from 'react';
import "./topbar.css";
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">EransaAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://i.imgur.com/Lnt9K7l.jpeg" className="topAvatar" alt="top avatar"/>
            </div>
        </div>
    </div>
  )
}

export default Topbar