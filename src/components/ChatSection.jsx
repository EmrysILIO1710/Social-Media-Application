import React, { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import smiley from "../pictures/smiley.png";
import backgroundImage from "../pictures/ChatBackground.jpg";
import TopBarChatSection from "./TopBarChatSection";

const ChatSection = (props) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [picker, setPicker] = useState(false);
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
  }, [props.mode]);

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
      <div
        className="bg-transparent h-full w-full fixed top-0 mt-16"
        style={{ color: modetext, backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full top-0 h-12 z-30">
          <TopBarChatSection mode={props.mode}/>
        </div>

        <div className="lg:hidden bg-transparent fixed bottom-0 mb-16 w-full p-2 z-10">
          <div className="flex flex-col-reverse bg-transparent h-full overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <div className="bg-orange-300 text-white rounded-lg p-2 max-w-xs">
                  {message}
                </div>
              </div>
            ))}
          </div>
          <div className=" sm:px-6 bg-white w-full rounded-full">
            <form onSubmit={handleSubmit}>
              <label className="relative mt-2 flex">
                <span className="absolute bottom-[120%] right-0">
                  <EmojiPicker
                    height={380}
                    width={300}
                    open={picker}
                    onEmojiClick={addEmoji}
                  />
                </span>
                <input
                  className="placeholder:italic text-black placeholder:text-gray-500 text-wrap block bg-white w-full rounded-full pl-2 focus:outline-none sm:text-sm"
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
                <span className="cursor-pointer m-2">
                  <button
                    type="submit"
                    className="bg-orange-400 text-white h-10 w-10 rounded-full px-2 py-2 ml-2"
                  >
                    <IoIosSend size={22} />
                  </button>
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
