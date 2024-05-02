import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages((prevMessages) => [inputValue, ...prevMessages]);
    setInputValue("");
  };

  return (
    <>
      <div className="w-full bg-white shadow-md top-0 mt-16 h-12">

      </div>
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
        <form onSubmit={handleSubmit} className="mt-2 flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-400 text-white rounded-full px-4 py-2 ml-2"
          >
            <IoIosSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatSection;
