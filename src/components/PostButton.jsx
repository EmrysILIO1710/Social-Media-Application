import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import "../App.css";
import PostOptions from "./PostOptions";

const PostButton = ({ addPost, mode }) => {
  const [showChildModal, setShowChildModal] = useState(false);
  // const [username, setUsername] = useState("");
  // const [dp, setDp] = useState("");
  // const [caption, setCaption] = useState("");
  // const [image, setImage] = useState();


  const handleOpenChildModal = () => {
    setShowChildModal(true);
  };

  const handleCloseChildModal = () => {
    setShowChildModal(false);
  };

  const handleUpload = (name, dp, cc, post) => {
    // setUsername(name);
    // setDp(dp);
    // setCaption(cc);
    // setImage(post);
    addPost(name, dp, cc, post);
  }

  return (
    <>
      <button
        className="fixed bottom-16 right-16 w-16 h-16 PostBtnShado bg-orange-400 rounded-full flex items-center justify-center shadow-md text-white text-lg font-bold"
        onClick={handleOpenChildModal}
      >
        <IoAdd size={32} />
      </button>
      {showChildModal && <PostOptions onClose={handleCloseChildModal} onUpload={handleUpload} mode={mode} />}
    </>
  );
};

export default PostButton;