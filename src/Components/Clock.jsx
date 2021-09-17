import React, { useState } from "react";
import "../Components/Clock.css";

const Clock = () => {
  const wk = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const mnth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);

  const updated = () => {
    const time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(updated, 1000);

  const crntDate = new Date().getDate();
  const crntMonth = mnth[new Date().getMonth()];
  const day = wk[new Date().getDay()];
  const year = new Date().getUTCFullYear();

  return (
    <div className="clock">
      <h2>{ctime}</h2>
      <h2>
        {day}, {crntMonth} {crntDate}, <br /> {year}
      </h2>
    </div>
  );
};

export default Clock;
