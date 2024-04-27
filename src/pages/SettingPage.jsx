import React, { useEffect } from "react";
import SettingsLeftSidebar from "../components/SettingsLeftSidebar";
// import SettingLanding from "../components/SettingLanding";
import Privacy from "../components/Privacy";

const SettingPage = (props) => {
  // const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  // const [modetext, setModetext] = useState("black");

  useEffect(() => {
    // if (props.mode) {
    //   //dark mode
    //   setModebg("rgb(26, 24, 48)");
    //   setModetext("white");
    // } else {
    //   //light mode
    //   setModetext("black");
    //   setModebg("rgb(255, 246, 234)");
    // }
    // props.handleSB(true);
    props.handleCB(true);
  }, [props]);

  return (
    <>
      <div
        className="flex bg-black"
      >
        <SettingsLeftSidebar mode={props.mode} />
        <div
          className="flex-grow hidden md:block"
        >
          <Privacy mode={props.mode}/>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
