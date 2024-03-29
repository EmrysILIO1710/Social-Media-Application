import React, { useState } from "react";
import "./Settingnew.css";
// import { Button } from "react-bootstrap";
// import { DarkMode } from "@mui/icons-material";
// import { Link } from "react-router-dom";

const Settingnew = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const [selectOption, setSelectOption] = useState("Dark Mode");
  const optionClick = (option) => {
    setSelectOption(option);
  };

  return (
    <div className="setting-box">
      <div
      id="left-box"
        className="d-flex flex-column flex-shrink-0 p-3 "
        style={{ width: "30%", height: "100%", }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none "
          
        >
          <span className="fs-4">Settings & privacy</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <h1
              className={
                selectOption === "Dark Mode"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => optionClick("Dark Mode")}
            >
              Dark Mode
            </h1>
          </li>

          <li className="nav-item">
            <h1
              className={
                selectOption === "Settings & privacy"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => optionClick("Settings & privacy")}
            >
              Settings & privacy
            </h1>
          </li>
        </ul>
        <hr />
      </div>

      <div className={isDarkMode ? "setting-box2 dark-mode" : "setting-box2"}>
        {selectOption === "Dark Mode" ? (
          <div>
          <h3
            style={{
              color: isDarkMode ? "white" : "black",
              fontFamily: "opensans-bold",
              marginTop: "20%",
            }}
          >
            {isDarkMode ? "switch to light mode" : "switch to dark mode"}
          </h3>
          <label className={`switch ${isDarkMode ? "clicked" : ""}`} onClick={toggleDarkMode}>
          <span className="slider"></span>
        </label> 
        </div>
        ) : (
          <div>
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="Enter Current Password"
              
            />
            <input
              type="password"
              placeholder="Enter New Password"
              
            />
            <input
            type="password"
            placeholder="Confirm Password"
            />

            <button> Change Password</button>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Settingnew;