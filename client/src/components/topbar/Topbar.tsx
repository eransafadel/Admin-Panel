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
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEUjmnD7Lggvw/profile-displayphoto-shrink_800_800/0/1602768957092?e=1664409600&v=beta&t=IrRlvS7KCa2n6IvxpELyNPdfvuDZbGYhH75mAbsdDaM" className="topAvatar" alt="top avatar"/>
            </div>
        </div>
    </div>
  )
}

export default Topbar