import React, { useEffect, useState } from "react";
import SettingsLeftSidebar from "./SettingsLeftSidebar";
import Privacy from "./Privacy";

const Settingnew = (props) => {

  useEffect(() => {
    props.handleCB(true);
  });
  return (
    <>
      <div className="bg-orange-200">
        <SettingsLeftSidebar mode={props.mode} />
      </div>
    </>
  );
};

export default Settingnew;
