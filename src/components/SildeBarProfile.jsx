import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SildeBarProfile = (props) => {
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
    }
  }, [ props]);
  return (
    <Link
      to={props.link}
      className="list-group-item my-1 py-3 lh-sm bg-transparent transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:shadow-none hover:cursor-pointer"
    >
      <div className="relative w-full flex items-center">
        <div className="relative flex-shrink-0">
          {typeof props.imageUrl === "string" ? (
            <img
              className="rounded-full h-14 w-14 object-cover object-center shadow-md border-2 border-white"
              src={props.imageUrl}
              alt="Profile"
            />
          ) : (
            props.imageUrl
          )}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold" style={{color: modetext}}>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SildeBarProfile;