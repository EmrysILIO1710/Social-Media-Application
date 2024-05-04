import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SuggationsFriends = ({ userData, mode }) => {
  const [modetext, setModetext] = useState("black");
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");

  useEffect(() => {
    if (mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
  }, [mode]);

  return (
    <div style={{color: modetext, backgroundColor: modebg}} className="scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-auto">
      {userData.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between px-4 py-3 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:shadow-none hover:cursor-pointer"
        >
          <div className="flex items-center">
            <div className="h-14 w-14 overflow-hidden rounded-full mr-4">
              <img
                className="h-full w-full object-cover"
                src={user.owner.picture}
                alt={`${user.owner.firstName} ${user.owner.lastName}`}
              />
            </div>
            <div>
              <Link
                to={"/chatsection"}
                state={{
                  dataName: user.owner.firstName + " " + user.owner.lastName,
                  dataDp: user.owner.picture,
                  dataAbout: user.text,
                  dataPic: user.image,
                }}
                className="no-underline"
              >
                <p className="text-lg font-bold" style={{ color: modetext }}>
                  {`${user.owner.firstName} ${user.owner.lastName}`}
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggationsFriends;