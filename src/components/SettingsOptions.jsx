import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SettingsOptions = ({ mode, link, imageUrl, name }) => {
  // const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (mode) {
      //dark mode
      // setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      // setModebg("rgb(255, 246, 234)");
    }
  }, [mode]);
  return (
    <div
      className="flex flex-col mt-1 bg-transperant rounded-md p-2 hover:cursor-pointer"
      style={{ color: modetext }}
    >
      <Link
        to={link}
        className="flex items-center justify-between no-underline"
        style={{ color: modetext }}
      >
        <div className="flex items-center">
          <div className="mr-3">
            {typeof imageUrl === "string" ? (
              <img
                className="rounded-full h-14 w-14 object-cover object-center shadow-md border-2 border-white"
                src={imageUrl}
                alt="Profile"
              />
            ) : (
              imageUrl
            )}
          </div>
          <div>
            <h2 className="text-lg font-medium">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SettingsOptions;
