import React, { useEffect, useState } from "react";

const SearchSettings = ({ handleChange, handleSubmit, searchTerm, mode }) => {
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
  return (
    <form
      onSubmit={handleSubmit}
      className="flex my-3 items-center"
      style={{ backgroundColor: modebg, color: modetext }}
    >
      <input
        type="text"
        placeholder="Search Settings..."
        value={searchTerm}
        onChange={handleChange}
        className="px-3 mx-3 py-2 border w-full focus:outline-none rounded-full"
      />
    </form>
  );
};

export default SearchSettings;
