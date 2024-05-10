import React, { useEffect, useState } from "react";
// import { IoCall } from "react-icons/io5";
// import { IoVideocam } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
              src={props.dataDp}
              alt="User Avatar"
            />
          </div>
          <div>
            <Link
              to={"/userprofile"}
              className="text-lg my-2 font-bold ml-2 no-underline"
              style={{ color: modetext }}
              state={{
                dataName: props.dataName,
                dataDp: props.dataDp,
                dataAbout: props.dataAbout,
                dataPic: props.dataPic,
              }}
            >
              {props.dataName}
            </Link>
          </div>
          {/* <div>
          <IoCall size={22}/>
          <IoVideocam size={22}/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBarChatSection;
