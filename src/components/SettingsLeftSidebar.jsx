import React, { useState, useEffect } from "react";
import SettingsOptions from "./SettingsOptions";
import { FcLock } from "react-icons/fc";
import { MdModeNight } from "react-icons/md";
import LogoutPopup from "./LogoutPopup";
import { RiLogoutBoxRFill } from "react-icons/ri";

function ListGroupSideBar({ mode }) {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  useEffect(() => {
    if (mode) {
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
  }, [mode]);

  return (
    <>
      <div
        className="fixed mt-16 top-0 h-screen sm:bg-transparent overflow-y-auto w-full md:w-80 md:z-50"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div className="h-20 text-center text-bold text-3xl justify-center no-underline flex items-center text-white bg-orange-400">
          Settings & Privacy
        </div>
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
        <div
          className="flex flex-col mt-1 bg-transparent rounded-md p-2 hover:cursor-pointer"
          style={{ color: modetext }}
          onClick={() => {
            setOpenLogoutModal(true);
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
          open={openLogoutModal}
          onClose={() => {
            setOpenLogoutModal(false);
          }}
        />
      </div>
    </>
  );
}

export default ListGroupSideBar;
