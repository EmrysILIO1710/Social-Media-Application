import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";
import PhotoUploadPart from "./PhotoUploadPart";
import InputBox from "./InputBox";
import TagAndLocation from "./TagAndLocation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", // Set default width to 100% for smaller screens
  maxWidth: "400px", // Set maximum width for larger screens
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  "@media (min-width: 768px)": {
    // Adjust width for screens larger than 768px
    width: "70%", // Set width to 70% of the parent container
    maxWidth: "500px", // Set maximum width for larger screens
  },
};

function PostOptions({ onClose }) {
  return (
    <Modal
      open={true} // Child modal should always be open when triggered by parent
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
        {/* Devider */}
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {/* Profile */}
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
              {/* DropdownMenu component */}
              <DropdownMenu />
              
            </div>
          </div>
        </div>
        {/* InputText part id="child-modal-description" */}
        <InputBox/>
        {/* PhotoUpload part */}
        <PhotoUploadPart/>
        {/* Tag and location and another.............. */}
        <TagAndLocation/>
      </Box>
    </Modal>
  );
}

export default PostOptions;
