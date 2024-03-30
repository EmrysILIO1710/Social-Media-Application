import React, { useEffect, useState } from "react";

const SettingsLanding = ({mode}) => {
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }
  }, [mode]);

  return (
    <div
      className="px-4 pt-5 my-5 text-center h-screen bg-transparent"
      style={{ backgroundColor: modebg, color: modetext }}
    >
      <h1 className="text-4xl font-bold">
        addaGram Community
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          Welcome to the addaGram community. Here you can find all the latest
          updates and news about addaGram.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="max-h-96 h-96 w-96">
          <img
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
            className="rounded-lg shadow-md mb-4 object-cover w-full h-full"
            alt="Example"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsLanding;
