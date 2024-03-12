import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import TagAndLocation from "./TagAndLocation";
import InputBox from "./InputBox";
import PhotoUploadPart from "./PhotoUploadPart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  "@media (min-width: 768px)": {
    width: "70%",
    maxWidth: "500px",
  },
};

function PostOptions({ onClose, onUpload }) {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  const handleImageUpload = (file) => {
    setImage(file);
  };

  const handleUpload = () => {
    // Use inputValue and image for upload
    onUpload(inputValue, image); // Pass data to parent
    onClose(); // Close modal after upload
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        <h2
          id="child-modal-title"
          className="text-center mt-1 font-middle text-xl"
        >
          Create post
        </h2>
        <div className="fixed top-0 right-0 mr-6 mt-3 cursor-pointer">
          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-orange-300">
            <button onClick={onClose}>
              <RxCross1 className="" />
            </button>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex py-1 max-w-[200px]">
          <img
            className="h-12 w-12 shrink-0 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          ></img>
          <div className="flex items-center mx-3 my-0">
            <div className="flex flex-col">
              <Link
                className="font-semibold text-black no-underline hover:text-blue-600"
                to="/profilepage"
              >
                Sabbir Ali
              </Link>
              <DropdownMenu />
            </div>
          </div>
        </div>
        <InputBox onInputChange={handleInputValueChange} />
        <PhotoUploadPart onImageUpload={handleImageUpload} />
        <TagAndLocation />
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <button
              onClick={handleUpload}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out"
            >
              Upload
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default PostOptions;