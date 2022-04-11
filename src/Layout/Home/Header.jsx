import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <img
          height="35px"
          width="35px"
          alt="logo"
          src="/images/gold"
          className="HeaderLeftLogo"
        />
        <span className="HeaderLeftName">FinTech</span>
      </div>
      <div className="HeaderRight">
        <BsFillBellFill className="HeaderRightIcon" />
        <img
          alt="avatar"
          src="/images/avatar"
          height="40px"
          width="40px"
          className="HeaderRightAvatar"
        />
      </div>
    </div>
  );
}
