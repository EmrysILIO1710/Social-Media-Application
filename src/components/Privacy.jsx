import React, { useState, useEffect } from "react";
import SettingsLeftSidebar from "./SettingsLeftSidebar";
import { FaArrowCircleLeft } from "react-icons/fa";

const Privacy = (props) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");
  const options = [
    {
      id: 1,
      label: "Public Profile",
      text: "Every addaGram user can see your profile",
    },
    {
      id: 2,
      label: "Only Friends",
      text: "Only your friends can see your profile",
    },
    {
      id: 3,
      label: "Private Profile",
      text: "No one can see your profile",
    },
  ];

  const Back = ()=> {
    window.history.back();
  }

  useEffect(() => {
    // props.handleCB(true);
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
  }, [props]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (id) => {
    setSelectedOption((prevSelectedOption) => {
      if (prevSelectedOption === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <>
      <div className="hidden lg:block">
        <SettingsLeftSidebar mode={props.mode} />
      </div>
      <div
        className="flex h-screen flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div className="lg:hidden absolute left-8 top-16 mt-6 h-auto w-auto flex rounded-full items-center"
        onClick={Back}>
          <FaArrowCircleLeft size={28} />
        </div>
        <div className="list-group d-grid gap-2 border-0">
          {options.map((option) => (
            <div
              key={option.id}
              className={`position-relative rounded-md ${
                selectedOption === option.id ? "bg-orange-300" : ""
              }`}
            >
              <input
                type="radio"
                id={option.id}
                name="listGroupRadioGrid"
                style={{ display: "none" }}
              />
              <label
                className="list-group-item py-3 pe-5 hover:bg-orange-200 hover:cursor-pointer flex items-center justify-between"
                htmlFor={option.id}
                onClick={() => handleOptionClick(option.id)}
              >
                <div className="flex-grow">
                  <strong className="fw-semibold">{option.label}</strong>
                  <span className="d-block small opacity-75">
                    {option.text}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Privacy;
