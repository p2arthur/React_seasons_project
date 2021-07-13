import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  Winter: {
    text: "Brr, it's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (myLatitude, month) => {
  if (month > 2 && month < 9) {
    return myLatitude > 0 ? "Summer" : "Winter";
  } else {
    return myLatitude > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.myLatitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display `}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1 className="textCenter">{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
