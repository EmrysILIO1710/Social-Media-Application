import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import smiley from "../pictures/smiley.png";

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [picker, setPicker] = useState(false);

  const openPicker = () => {
    setPicker(!picker);
  };

  const addEmoji = (e) => {
    setInputValue(inputValue + e.emoji);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages((prevMessages) => [inputValue, ...prevMessages]);
    setInputValue("");
  };
  //chat section
  return (
    <>
      <div className="w-full bg-white shadow-md top-0 mt-16 h-12"></div>
      <div className="lg:hidden fixed bottom-0 mb-16 w-full bg-white p-2">
        <div className="flex flex-col-reverse h-full overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="bg-orange-300 text-white rounded-lg p-2 max-w-xs">
                {message}
              </div>
            </div>
          ))}
        </div>
        <div className="px-2 sm:px-6">
          <form onSubmit={handleSubmit}>
            <label className="relative block mt-4 flex">
              <span className="absolute bottom-[120%] right-0">
                <EmojiPicker
                  height={380}
                  width={300}
                  open={picker}
                  onEmojiClick={addEmoji}
                />
              </span>
              <input
                className="placeholder:italic placeholder:text-gray-500 text-wrap block bg-white w-full rounded-full border border-slate-300 py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="write a message..."
                type="text"
                name="search"
                value={inputValue}
                onChange={handleInputChange}
              />
              <span className="mx-2 my-2 cursor-pointer">
                <img
                  src={smiley}
                  alt=""
                  onClick={openPicker}
                  style={{ width: "50px" }}
                />
              </span>
              <span className="mx-2 mt-2 cursor-pointer">
                <button
                  type="submit"
                  className="bg-orange-400 text-white rounded-full px-3 py-2 ml-2"
                >
                  <IoIosSend size={20} />
                </button>
              </span>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
