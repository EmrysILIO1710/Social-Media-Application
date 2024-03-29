import React from "react";

const SearchSettings = ({handleChange,handleSubmit,searchTerm}) => {
  return (
    <form onSubmit={handleSubmit} className="flex my-3 items-center">
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
