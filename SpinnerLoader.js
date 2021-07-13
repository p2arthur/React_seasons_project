import React from "react";

const SpinnerLoader = (props) => {
  return (
    <div class="loader-spinner ui segment">
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

SpinnerLoader.defaultProps = {
  message: "loading...",
};

export default SpinnerLoader;
