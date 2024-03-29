import React from "react";
import { Link } from "react-router-dom";

const SettingsOptions = (props) => {
  return (
    <>
      <div className="flexspace-y-4 mt-4 bg-blue-200">
        <div className="">
          <Link
            to="/"
            className="my-1 mt-2 no-underline text-center text-black py-3 lh-sm bg-transparent hover:shadow-md active:shadow-none hover:cursor-pointer"
          >
            <div className="relative w-full flex items-center">
              <div className="relative flex-shrink-0 ml-5">
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
              <div className="ml-5">
                <h2 className="text-base font-base">{props.name}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingsOptions;
