import React, { useEffect, useState } from "react";
import ChatProfiles from "./ChatProfiles";

const BottomSearch = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");
  // const location = useLocation();
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
    // if (!location.hash) {
    //   window.scrollTo(0, 0);
    // }
  }, [props]);
  return <>
    <div style={{color: modetext, backgroundColor: modebg, height: '100vh', width: '100vw'}} className="float-left">
        <ChatProfiles mode={props.mode}/>
    </div>
  </>
};

export default BottomSearch;