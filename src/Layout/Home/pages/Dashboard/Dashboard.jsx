import React from "react";
import "./Dashboard.scss";
import Options from "./options/Options";
import Stocks from "./stocks/Stocks";
import Tips from "./tips/Tips";
import Portfolio from "./portfolio/Portfolio";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="DashboardTop">
        <Portfolio />
      </div>
      <div className="DashboardBottom">
        <div className="DashboardBottomCont">
          <Stocks />
        </div>
        <div className="DashboardBottomCont">
          <Options />
        </div>
        <div className="DashboardBottomCont">
          <Tips />
        </div>
      </div>
    </div>
  );
}
