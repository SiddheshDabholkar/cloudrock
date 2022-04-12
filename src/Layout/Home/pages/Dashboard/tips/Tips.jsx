import React from "react";
import "./Tips.scss";

export default function Tips() {
  return (
    <div className="Tips">
      <h1 className="TipsHead">Tips</h1>
      <div className="TipsCard">
        <h1 className="TipsCardTop">Gold is up 20%</h1>
        <div className="TipsCardBottom">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque, lacus non congue convallis, dolor elit cursus urna, ac
          feugiat neque elit id risus. Sed dolor eros, ullamcorper nec libero
          vitae, malesuada fringilla eros. Sed ultrices, mauris ut porta cursus,
          mauris dolor vulputate dolor, sed accumsan purus eros non sem.
          Pellentesque nec mi nisl. Cras rhoncus ac elit a varius. In urna nunc,
          scelerisque vel enim malesuada, varius ullamcorper quam. Etiam rhoncus
          fringilla odio sed fermentum.
        </div>
      </div>
    </div>
  );
}
