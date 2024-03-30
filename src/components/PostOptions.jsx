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
  // bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  "@media (min-width: 768px)": {
    width: "70%",
    maxWidth: "500px",
  },
};

function PostOptions({ onClose, onUpload, mode, value }) {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");
  const [modebg, setModebg] = useState("white");
  const [modetext, setModetext] = useState("black");
  // const [modeTrigger, setModeTrigger] = useState(0);
  // const [user, setUser] = useState("Blue Lagoon");
  const dp = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const user = "Blue Lagoon";

  React.useEffect(() => {
    // setModeTrigger(1);
    if (mode) {
      //dark mode
      setModetext("white");
      setModebg("rgb(26, 24, 48)");
    } else {
      //light mode
      setModetext("black");
      setModebg("white");
    }
  }, [mode]);

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  const handleImageUpload = (file) => {
    setImage(file);
    console.log(file);
  };

  const handleUpload = () => {
    // Use inputValue and image for upload
    if(inputValue || image){
      console.log(value);
      if(value === "Thought"){
        onUpload(user, dp, inputValue); // Pass data to parent
        onClose(); // Close modal after upload
      }
      else{
        onUpload(user, dp, inputValue, image); // Pass data to parent
        onClose(); // Close modal after upload
      }
    }
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, backgroundColor: modebg, color: modetext }}>
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
            src={dp}
            // src={image}
            alt=""
          ></img>
          <div className="flex items-center mx-3 my-0" >
            <div className="flex flex-col">
              <Link
                className="font-semibold  no-underline hover:text-blue-600"
                style={{color: modetext}}
                to="/profilepage"
              >
                {user}
              </Link>
              <DropdownMenu mode={mode} />
            </div>
          </div>
        </div>
        <InputBox onInputChange={handleInputValueChange} />
        {
          (value !== "Thought") && <PhotoUploadPart value={value} onImageUpload={handleImageUpload} />
        }
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
      {/* <img src={image} alt="" /> */}
    </Modal>
  );
}

export default PostOptions;