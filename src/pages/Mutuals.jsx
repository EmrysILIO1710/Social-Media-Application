import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SimpleContainer from "../components/SimpleContainer";

const Mutuals = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      // setModetext("white");
    } else {
      //light mode
      // setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
    props.handleCB(true);
  }, [props]);
  return (
    <>
      <div style={{ backgroundColor: modebg, height: "100vh", width: "100%"}}>
        <div className="fixed h-full">
          <SideBar className="fixed" mode={props.mode} />
        </div>
        <SimpleContainer />
      </div>
    </>
  );
};

export default Mutuals;
