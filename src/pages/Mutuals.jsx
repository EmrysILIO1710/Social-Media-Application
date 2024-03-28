import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SimpleContainer from "../components/SimpleContainer";
import { useLocation } from "react-router-dom";

const Mutuals = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const location = useLocation();
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
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location, props]);
  return (
    <>
      <div style={{ backgroundColor: modebg, width: "100%", height: "auto"}}>
        <div className="fixed h-full">
          <SideBar className="fixed" mode={props.mode} />
        </div>
        <SimpleContainer mode={props.mode} />
      </div>
    </>
  );
};

export default Mutuals;
