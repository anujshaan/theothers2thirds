import React from 'react'
import "./navbar.css"
import {Language, NotificationsNone, Settings} from '@material-ui/icons';

export default function Navbar({currentUser,storage,setCurrentUser}) {

    const handleLogout = ()=>{
    storage.removeItem("user")
    setCurrentUser(null);
  }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        Online DASHBOARD
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer right-margin">
                        <NotificationsNone className="navbar-material-icons"/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer right-margin">
                        <Language className="navbar-material-icons"/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer right-margin">
                        <Settings className="navbar-material-icons"/>
                    </div>
                        <p>Hi, {currentUser}</p>
                    <div className="topbarUserProfile">
                        <img className="topAvatar"
                        src="https://binoandfino.files.wordpress.com/2010/08/cropped-small-698694_85227669-gambian-girl.jpg?w=640" 
                        alt="" />
                        <div className="topbarLogout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}