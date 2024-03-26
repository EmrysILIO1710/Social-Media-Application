import React from "react";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const TagAndLocation = () => {
  return (
    <div className="flex max-w-md my-3 mx-auto p-3 bg-white rounded-lg shadow-md border border-gray-300 items-center">
      <div>Add to your post</div>

      {/* Container for last two icons */}
      <div className="ml-auto flex space-x-2">
        {/* Tagperson */}
        <div className="flex rounded-full bg-orange-500 h-9 w-9 justify-center items-center cursor-pointer">
          <FaUserTag color="white" size={20} />
        </div>

        {/* Location */}
        <div className="flex rounded-full bg-orange-500 h-9 w-9 justify-center items-center cursor-pointer">
          <FaLocationDot color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default TagAndLocation;