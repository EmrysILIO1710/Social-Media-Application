import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import "../App.css";
import PostOptions from "./PostOptions";

const PostButton = () => {
  const [showChildModal, setShowChildModal] = useState(false);

  const handleOpenChildModal = () => {
    setShowChildModal(true);
  };

  const handleCloseChildModal = () => {
    setShowChildModal(false);
  };

  return (
    <>
      <button
        className="fixed bottom-16 right-16 w-16 h-16 PostBtnShado bg-orange-400 rounded-full flex items-center justify-center shadow-md text-white text-lg font-bold"
        onClick={handleOpenChildModal}
      >
        <IoAdd size={32} />
      </button>
      {showChildModal && <PostOptions onClose={handleCloseChildModal} />}
    </>
  );
};

export default PostButton;