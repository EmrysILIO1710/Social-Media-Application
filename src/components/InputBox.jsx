import React, { useState } from "react";
import Emoji from "./Emoji";

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const updateInputValue = (emoji) => {
    setInputValue(inputValue + emoji);
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <input
        type="text"
        className="w-full h-full p-2 bg-transparent outline-none"
        placeholder="Whats on your mind?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Emoji updateInputValue={updateInputValue}/>
    </div>
  );
};

export default InputBox;