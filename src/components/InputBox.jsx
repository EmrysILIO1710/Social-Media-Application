import React, { useState } from "react";
import Emoji from "./Emoji";

const InputBox = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value); // Send data to parent
  };

  const updateInputValue = (emoji) => {
    const updatedValue = inputValue + emoji;
    setInputValue(updatedValue);
    onInputChange(updatedValue); // Send data to parent
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <input
        type="text"
        className="w-full h-full p-2 bg-transparent outline-none"
        placeholder="Whats on your mind?"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Emoji updateInputValue={updateInputValue} />
    </div>
  );
};

export default InputBox;