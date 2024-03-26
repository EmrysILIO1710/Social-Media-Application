import React, { useEffect, useState } from "react";
import "./FeedPage.css";
// import Navbar from "../components/Navbar";
import StoryArea from "../components/StoryArea";
import PostArea from "../components/PostArea";
// import BackgroundButton from "../components/BackgroundButton";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";

const FeedPage = (props) => {
  // const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");
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

  // const handleDataFromBackgroundButton = (data) => {
  //   setDataFromBackgroundButton(data);
  // };

  return (
    <div
      className="FP-container"
      style={{
        // backgroundImage: `url(${dataFromBackgroundButton})`,
        backgroundColor: modebg,
      }}
    >
      <div className="fixed h-full">
        <SideBar className="fixed" />
      </div>
      {/* <BackgroundButton sendDataToFeedPage={handleDataFromBackgroundButton} /> */}
      {/* <Navbar /> */}
      <div className="FP-story">
        <StoryArea mode={props.mode} />
      </div>
      {/* {console.log(props.mode)} */}
      <PostArea mode={props.mode} />
    </div>
  );
};

export default FeedPage;
