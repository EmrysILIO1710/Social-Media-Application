import React from "react";
import { Link } from "react-router-dom";

const SettingsOptions = (props) => {
  return (
    <div className="flex flex-col mt-1 bg-transperant rounded-md p-2 hover:bg-gray-200 hover:cursor-pointer">
      <Link
        to={props.link}
        className="flex items-center justify-between no-underline text-black"
      >
        <div className="flex items-center">
          <div className="mr-3">
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
          <div>
            <h2 className="text-lg font-medium">{props.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SettingsOptions;
