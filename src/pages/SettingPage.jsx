import React, { useEffect, useState } from "react";
import SettingsLeftSidebar from "../components/SettingsLeftSidebar";
import SettingLanding from "../components/SettingLanding";

const SettingPage = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
    props.handleCB(true);
  }, [props]);
  return (
    <>
      <div className="h-screen" style={{ backgroundColor: modebg , color: modetext}}>
        <SettingsLeftSidebar mode={props.mode} />
        <SettingLanding mode={props.mode}/>
      </div>
    </>
  );
};

export default SettingPage;
