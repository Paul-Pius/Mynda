import React from "react";

import "./header.css";
import messageicon from "./images/messageicon.svg";
import notifications from "../../../components/my-component/header/images/notifications.svg";
import ProfilePicture from "../../../components/my-component/profile_image/ProfileImage";
import ThreeDotsMenu from "../ThreeDotsMenu/ThreeDotsMenu.jsx";

function Header(props) {
  // let DisplayPicture = <img src={props.picture} alt=""></img>;

  return (
    <>
      <header className="main-header">
        <div className="user-info">
          {/* <ProfilePicture DisplayPicture={DisplayPicture} /> */}
          <div className="header-greeting">
            <h4>Good morning,</h4>
            <p>Welcome James</p>
          </div>
        </div>

        <div className="main-header-icons">
          <div className="message-icon-mynda">
            <a href="/mynda/message">
              <img src={messageicon} alt="placeholder"></img>
            </a>
          </div>
          <div className="notification-icon-mynda">
            <a href="/mynda/notification">
              <img src={notifications} alt="placeholder"></img>
            </a>
          </div>
          
          <ThreeDotsMenu />

        </div>
      </header>
    </>
  );
}

export default Header;
