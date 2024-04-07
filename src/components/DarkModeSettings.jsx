import React, { useEffect, useState } from "react";
import ModeChangingCard from "./ModeChangingCard";
import Addagramdark from "../pictures/AddagramDark.png";
import AddagramLight from "../pictures/AddagramLight.png";
import SettingsLeftSidebar from "./SettingsLeftSidebar";
import { FaArrowCircleLeft } from "react-icons/fa";

const DarkModeSettings = (props) => {
  useEffect(() => {
    props.handleCB(true);
  }, [props]);

  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");
  const Back = () => {
    window.history.back();
  };

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
  }, [props]);

  return (
    <>
      <div className="hidden lg:block">
        <SettingsLeftSidebar mode={props.mode} />
      </div>
      <div
        className="fixed h-screen md:my-16 w-screen z-0 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row justify-center items-center overflow-scroll"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div
          className="lg:hidden absolute left-8 top-16 mt-6 h-auto w-auto flex rounded-full items-center"
          onClick={Back}
        >
          <FaArrowCircleLeft size={28} />
        </div>
        <div className="mt-4 shadow-md mb-4 sm:mb-0 sm:mr-4">
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
        <div className="w-full sm:w-20"></div>
        <div className="shadow-md mb-4 sm:mb-0 sm:mr-4">
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
