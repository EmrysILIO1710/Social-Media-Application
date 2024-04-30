import React, { useState, useEffect } from "react";
// import SearchSettings from "./SearchSettings";
import SettingsOptions from "./SettingsOptions";
import { FcLock } from "react-icons/fc";
import { MdModeNight } from "react-icons/md";
// import { LuWallpaper } from "react-icons/lu";
import LogoutPopup from "./LogoutPopup";
import { RiLogoutBoxRFill } from "react-icons/ri";

// import { Link } from "react-router-dom";

function ListGroupSideBar({ mode }) {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");

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
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSearch(searchTerm);
  // };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="fixed mt-16 top-0 h-screen sm:bg-transparent overflow-y-auto w-full md:w-80 md:z-50"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div className="h-20 text-center text-bold text-3xl justify-center no-underline flex items-center text-white bg-orange-400">
          Settings & Privacy
        </div>
        {/* <SearchSettings
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        mode={mode}
      /> */}
        <hr />
        <SettingsOptions
          imageUrl={<FcLock size={30} />}
          name="Privacy checkup"
          link="/privacy"
          mode={mode}
        />
        <SettingsOptions
          imageUrl={<MdModeNight size={30} color="orange" />}
          name="Mode"
          link="/darkmode"
          mode={mode}
        />
        {/* <SettingsOptions
        imageUrl={<LuWallpaper size={30} color="orange" />}
        name="Themes"
        link="/theams"
        mode={mode}
      /> */}

        <div
          className="flex flex-col mt-1 bg-transparent rounded-md p-2 hover:cursor-pointer"
          style={{ color: modetext }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="flex items-center justify-between no-underline">
            <div className="flex items-center">
              <div className="mr-3">
                <RiLogoutBoxRFill color="orange" size={30} />
              </div>
              <div>
                <h2 className="text-lg font-medium">Logout</h2>
              </div>
            </div>
          </div>
        </div>

        <LogoutPopup
          mode={mode}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </>
  );
}

export default ListGroupSideBar;
