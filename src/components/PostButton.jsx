import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import "../App.css";
import PostOptions from "./PostOptions";

const PostButton = ({ addPost, mode }) => {
  const [showChildModal, setShowChildModal] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleOpenChildModal = () => {
    setIsRotated(true);
    setTimeout(() => {
      setShowChildModal(true);
    }, 300);
  };

  const handleCloseChildModal = () => {
    setShowChildModal(false);
    setIsRotated(false);
  };

  const handleUpload = (name, dp, cc, post) => {
    addPost(name, dp, cc, post);
  };

  return (
    <div className="relative">
      <button
        className={`fixed bottom-16 right-16 w-16 h-16 ${
          isRotated ? "rotate-45" : ""
        } PostBtnShado bg-orange-400 rounded-full flex items-center justify-center shadow-md text-white text-lg font-bold transition-transform duration-500`}
        onClick={handleOpenChildModal}
      >
        <IoAdd size={32} />
      </button>
      {showChildModal && (
        <div className="absolute right-0 bottom-24 flex space-x-4">
          <PostOptions onClose={handleCloseChildModal} onUpload={handleUpload} mode={mode} />
        </div>
      )}
    </div> 
  );
};

export default PostButton;