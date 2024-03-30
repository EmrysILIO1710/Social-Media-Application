import React, { useEffect } from "react";
import ModeChangingCard from "./ModeChangingCard";
import Addagramdark from "../pictures/AddagramDark.png";
import AddagramLight from "../pictures/AddagramLight.png"

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
        <div className="shadow-md">
          <ModeChangingCard
            Image={Addagramdark}
            Heading={"Addagram Dark Mode"}
            Description={
              "As a user, you can switch to dark mode by clicking on the dark mode button."
            }
            ButtonText={"On Dark Mode"}
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
