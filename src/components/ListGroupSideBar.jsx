import React, { useEffect, useState } from "react";
import SildeBarProfile from "./SildeBarProfile";
import { FaUserFriends } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuWallpaper } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";

function ListGroupSideBar(props) {
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
    <div className="fixed mt-16 top-0 h-screen overflow-y-auto bg-transparent text-black w-80">
      <div className="text-2xl bg-orange-400 h-20 text-center text-bold text-3xl justify-center flex items-center text-white">
        Quick Links
      </div>
      {/* First list */}
      <div className="space-y-4 px-4" style={{color: modetext}}>
        <SildeBarProfile
          imageUrl={<FaUserFriends size={30} />}
          name="Mutuals"
          mode={props.mode}
          link={'/mutuals'}
        />
        <SildeBarProfile imageUrl={<CiSaveDown2 size={30} />} name="Saved" mode={props.mode} link={'/'} />
        <SildeBarProfile imageUrl={<LuSettings size={30} />} name="Settings" mode={props.mode} link={'/'} />

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
        
        <div className="self-end">
          <hr />
          <SildeBarProfile imageUrl={<SlLogout size={30} />} name="Logout" mode={props.mode} link={'/'} />
        </div>
      </div>
    </div>
  );
}

export default ListGroupSideBar;
