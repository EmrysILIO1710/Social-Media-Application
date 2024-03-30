import React, { useEffect, useState } from "react";
import TheamCard from "./TheamCard";

const ThemesSettings = (props) => {
  useEffect(() => {
    props.handleSB(true);
  });
  useEffect(() => {
    props.handleCB(true);
  });
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
    props.handleCB(true);
  }, [props]);
  return (
    <div
      className="absotute flex h-screen justify-center ml-80"
      style={{ backgroundColor: modebg, color: modetext }}
    >
      <div className="flex card-group flex-wrap">
        <TheamCard
          title="Card title"
          imgSrc="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cardText="This is a Holographic Effect Theam."
        />
        <TheamCard
          title="Card title"
          imgSrc="https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          cardText="This is a Sy-Fy Effect Theam."
        />
      </div>
    </div>
  );
};

export default ThemesSettings;
