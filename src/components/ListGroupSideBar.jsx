import React, { useEffect, useState } from "react";
import SildeBarProfile from "./SildeBarProfile";
import { FaUserFriends } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuWallpaper } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";
import LogoutPopup from "./LogoutPopup";

function ListGroupSideBar(props) {
  const [modetext, setModetext] = useState("black");
  const [open, setOpen] = useState(false);
  const [gradient, setGradient] = useState("linear-gradient(to left, rgb(255, 246, 234, 0) 0%, rgb(254, 163, 82) 50% ")

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModetext("white");
      setGradient("linear-gradient(to left, rgb(26, 24, 48, 0) 0%, rgb(254, 163, 82) 60% ")
    } else {
      //light mode
      setModetext("black");
      setGradient("linear-gradient(to left, rgb(255, 246, 234, 0) 0%, rgb(254, 163, 82) 50% ");
    }
  }, [props]);

  return (
    <div className="fixed mt-16 top-0 h-screen overflow-y-auto bg-transparent text-black w-80">
      <div className="h-20 text-center text-bold text-3xl justify-center flex items-center text-white"
        style={{background: gradient}}
      >
        Quick Links
      </div>
      {/* First list */}
      <div className="space-y-4 px-4" style={{ color: modetext }}>
        <SildeBarProfile
          imageUrl={<FaUserFriends size={30} />}
          name="Mutuals"
          mode={props.mode}
          link={"/mutuals"}
        />
        <SildeBarProfile
          imageUrl={<CiSaveDown2 size={30} />}
          name="Saved"
          mode={props.mode}
          link={"/"}
        />
        <SildeBarProfile
          imageUrl={<LuSettings size={30} />}
          name="Settings"
          mode={props.mode}
          link={"/"}
        />

        {/* Theme Changer */}
        <Link
          to="/"
          className="list-group-item my-1 py-3 lh-sm bg-transparent no-underline transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:shadow-none hover:cursor-pointer text-decoration-none" 
        >
          <div className="relative w-full flex items-center">
            <div className="relative flex-shrink-0">
              <LuWallpaper size={30} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold">Themes</h2>
            </div>
          </div>
        </Link>
        <hr />
        {/* logout area */}
        <div className="self-end list-group-item my-1 py-3 lh-sm bg-transparent no-underline transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:shadow-none hover:cursor-pointer text-decoration-none"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="relative w-full flex items-center">
            <div className="relative flex-shrink-0">
              <SlLogout size={30} />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold">Logout</h2>
            </div>
          </div>
          
          <LogoutPopup
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            mode={props.mode}
          />
        </div>
      </div>
    </div>
  );
}

export default ListGroupSideBar;
