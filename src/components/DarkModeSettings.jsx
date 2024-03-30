import React, { useEffect } from "react";
import DarkCard from "./DarkCard";

const DarkModeSettings = (props) => {
  useEffect(() => {
    props.handleSB(true);
  });
  useEffect(() => {
    props.handleCB(true);
  });
  return (
    <>
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <DarkCard />
      </div>
    </>
  );
};

export default DarkModeSettings;
