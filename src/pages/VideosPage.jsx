import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
// import SimpleContainer from "../components/SimpleContainer";
import { useLocation } from "react-router-dom";
// import VideosContainer from "../components/VideosContainer";
import VideosArea from "../components/VideosArea";

const VideosPage = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");
  const location = useLocation();
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
        <div style={{ backgroundColor: "rgb(0, 0, 0, 0)", width: "45vw", height: "auto", margin: "0 auto", padding: "20px 0" }}>
          <h1 className="mt-16 font-bold" style={{color: modetext}} >Videos</h1>
        </div>
        {/* <VideosContainer mode={props.mode} /> */}
        <VideosArea mode={props.mode} />
      </div>
    </>
  );
};

export default VideosPage;
