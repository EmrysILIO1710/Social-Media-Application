import React, { useEffect, useState } from "react";
import ModeChangingCard from "./ModeChangingCard";
import Addagramdark from "../pictures/AddagramDark.png";
import AddagramLight from "../pictures/AddagramLight.png";

const DarkModeSettings = (props) => {
  useEffect(() => {
    props.handleSB(true);
  });
  useEffect(() => {
    props.handleCB(true);
  });

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
      <div
        className="fixed h-screen w-screen z-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div className="shadow-md">
          <ModeChangingCard
            Image={Addagramdark}
            Heading={"Addagram Dark Mode"}
            Description={
              "As a user, you can switch to dark mode by clicking on the dark mode button."
            }
            ButtonText={"On Dark Mode"}
            mode={props.mode}
          />
        </div>
        <div className="w-20"></div>
        <div className="shadow-md">
          <ModeChangingCard
            Image={AddagramLight}
            Heading={"Addagram Light Mode"}
            Description={
              "As a user, you can switch to Light mode by clicking on the dark mode button."
            }
            ButtonText={"On Light Mode"}
          />
        </div>
      </div>
    </>
  );
};

export default DarkModeSettings;
