import React from "react";
import "../assets/css/dashboard.css";
import ReactPlayer from "react-player";
import Popular from "./Popular";

const Dashboard = () => {
  return (
    <div>
      <header className="header">
        <ReactPlayer
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          volume={1}
          className="header__video"
          url="https://vimeo.com/384025132"
        />
      </header>
      <Popular />
    </div>
  );
};

export default Dashboard;
