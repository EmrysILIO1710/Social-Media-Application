import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

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
  return (
    <div style={{color: modetext, backgroundColor: modebg, height: '100vh', width: '100vw'}}>
      <div className="w-full h-fit pt-24 grid justify-items-center">
        <h3>Search User...</h3>
        <br />
        <SearchResults mode={props.mode} />
      </div>
    </div>
  );
};

export default BottomSearch;
