import React from "react";
import SildeBarProfile from "./SildeBarProfile";
import { FaUserFriends } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuWallpaper } from "react-icons/lu";

function ListGroupSideBar() {
  return (
    <div className="absolute mt-16 top-0 h-screen overflow-y-auto bg-white text-black w-60 shadow-md">
      {/* First list */}
      <div className="list-group list-group-flush scrollarea">
        <SildeBarProfile
          imageUrl={
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name="Name"
        />
        <SildeBarProfile
          imageUrl={<FaUserFriends size={30}/>}
          name="Friends"
        />
        <SildeBarProfile imageUrl={<CiSaveDown2 size={30}/>} name="Saved" />


        {/* Theam Changer */}
        <Link
          to="/"
          className="list-group-item my-1 py-3 lh-sm hover:bg-gray-100 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:bg-gray-200 active:shadow-none hover:cursor-pointer"
        >
          <div className="relative w-full flex items-center">
            <div className="relative flex-shrink-0">
              <LuWallpaper size={30}/>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-black">Theams</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ListGroupSideBar;
