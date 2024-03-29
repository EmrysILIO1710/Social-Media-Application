import React, { useState } from "react";
import SearchSettings from "./SearchSettings";
import SettingsOptions from "./SettingsOptions";
import { FcLock } from "react-icons/fc";

function ListGroupSideBar(props, { onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div className="fixed mt-16 top-0 h-screen overflow-y-auto bg-transparent text-black w-80">
      <div className="h-20 text-center text-bold text-3xl justify-center flex items-center text-white bg-orange-400">
        Settings & Privacy
      </div>
      <SearchSettings
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
      />
      <SettingsOptions imageUrl={<FcLock size={30} />} name="Privecy checkup" />
      <SettingsOptions imageUrl={<FcLock size={30} />} name="Privecy checkup" />
    </div>
  );
}

export default ListGroupSideBar;
