import React from "react";
import "./Follow.css";

const Follow = () => {
  return (
    <div className="Main-div absolute w-60 top-96 w-52 text-center left-1/2 -translate-x-1/2
      sm:-bottom-6 sm:top-auto sm:w-60
      xl:right-60 xl:translate-x-1/2 xl:top-2/3 xl:w-72
    ">
      <div className="Follower-button">
        <h2 className="text-bold text-4xl
          xl:text-5xl
        ">1200</h2>
        <p className="text-xl text-bold
          xl:text-2xl
        ">Followers</p>
        
      </div>
      <div className="Following-button">
        <h2 className="text-bold text-4xl
          xl:text-5xl
        ">350</h2>
        <p className="text-xl text-bold
          xl:text-2xl
        ">Following</p>
      
      </div>
    </div>
  );
};
export default Follow;
