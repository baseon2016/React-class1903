import React from "react";
import { Link } from "react-router-dom";
import "./push.css";
const TodayPush = () => {
  return (
    <div className="push po-a">
      <h3>-2019/08/22-</h3>
      <Link to="/login" className="click-bar">
        今日推送>>
      </Link>
    </div>
  );
};

export default TodayPush;
