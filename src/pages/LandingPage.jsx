import React, { useEffect } from "react";
import "./LandingPage.css";
import LandingForm from "../components/LandingForm";
import icon from "../pictures/icon.jpg";

const LandingPage = (props) => {
  useEffect(() => {
    props.handleCB(false);
  });

  return (
    <>
      <div className="LP-cover">
        <LandingForm />
        <div className="LP-content">
          <h1 className="LP-box-h1">
            Welcome To <span style={{ color: "rgb(254, 163, 82)" }}>adda</span>
            Gram
          </h1>
          <br />
          <h2>The new way to connect</h2>
          <h2>Discover new people</h2>
          <h2>Share memories</h2>
        </div>
      </div>
      <div className="text-center text-xs mx-auto px-4 fixed bottom-4 left-1/2 -translate-x-1/2 w-full min-[540px]:w-fit">
        <span className="flex justify-around">
          <img src={icon} alt="" className="w-5 h-5" />
          <p>
            &nbsp;&nbsp;© addaGram 2024 by Spandan Bera, Sabbir Ali and Soumi Chakraborty
          </p>
        </span>
      </div>
    </>
  );
};

export default LandingPage;
