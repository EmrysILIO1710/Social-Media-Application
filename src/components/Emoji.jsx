import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { RxCross1 } from "react-icons/rx";
import { CiFaceSmile } from "react-icons/ci";

const Emoji = ({updateInputValue})=> {

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
 
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (event, emojiObject) => {
    const emoji = event.emoji;
    // console.log(emoji)
    updateInputValue(emoji);
  };
  return <>
    <div>
    <button
        className="absolute top-0 right-0 h-full px-3 flex items-center bg-transparent focus:outline-none"
        style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
        onClick={toggleEmojiPicker}
      >
        <CiFaceSmile size={24} />
      </button>
      {showEmojiPicker && (
        <div className="fixed top-0 right-0 h-screen w-auto overflow-visible z-50">
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      {showEmojiPicker && (
        <button
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none z-50"
          onClick={closeEmojiPicker}
        >
          <RxCross1 />
        </button>
      )}
    </div>
  </>
}
export default Emoji;