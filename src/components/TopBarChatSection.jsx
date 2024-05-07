import React, { useEffect, useState } from "react";
import image from "../pictures/friends.jpg";
import { FaArrowLeft } from "react-icons/fa";

const TopBarChatSection = (props) => {
  const [modetext, setModetext] = useState("black");
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");

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
  }, [props.mode]);

  const back = () => {
    window.history.back();
  };

  return (
    <div
      className="shadow-lg"
      style={{ color: modetext, backgroundColor: modebg }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="" onClick={back}>
            <FaArrowLeft className="ml-4" size={22} />
          </div>
          <div className="h-12 w-12 my-2 overflow-hidden rounded-full ml-4">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt="User Avatar"
            />
          </div>
          <div>
            <p className="text-lg my-2 font-bold ml-2" style={{ color: modetext }}>
              Sabbir
            </p>
            {/* <p className="text-sm text-gray-600" style={{ color: modetext }}>
              Active now
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarChatSection;
