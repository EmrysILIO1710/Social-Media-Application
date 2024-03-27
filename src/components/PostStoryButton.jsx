import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import StoryUploadOption from "./StoryUploadOption";

const Story = (props) => {
  const [circle, setCircle] = useState("border-5 border-orange-400");
  const [showChildModal, setShowChildModal] = useState(false);
  const [modetext, setModetext] = useState("text-black");
  const handleOpenChildModal = () => {
    setShowChildModal(true);
  };
  useEffect(() => {
    setModetext(props.mode ? "text-white" : "text-black");
  }, [props.mode]);

  return (
    <>
      <div className="flex flex-col items-center relative">
        <div
          className={`relative w-24 h-24 rounded-full overflow-hidden ${circle}`}
        >
          <img
            src={props.profilepic}
            alt=""
            className="w-full h-full object-cover filter blur-sm"
          />
          <button
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-full cursor-pointer"
            onClick={handleOpenChildModal}
          >
            <IoAdd className="text-white" size={28} />
          </button>
          {showChildModal && (
            <div className="absolute right-0 bottom-24 flex space-x-4">
              <StoryUploadOption
                onClose={() => setShowChildModal(false)}
                onUpload={props.onUpload}
                mode={props.mode}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Story;
