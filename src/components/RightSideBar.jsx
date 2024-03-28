import React, { useState, useEffect } from "react";
import SuggationsFriends from "./SuggationsFriends";

function RightSideBar(props) {
  const [userData, setUserData] = useState([]);
  const [gradient, setGradient] = useState(
    "linear-gradient(to right, rgb(255, 246, 234) 0%, rgb(254, 163, 82) 50% "
  );

  const getData = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/post?limit=99", {
        method: "GET",
        headers: {
          "app-id": "65dca2b0afdc1b13e468846b",
        },
      });
      const data = await res.json();
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    if (props.mode) {
      //dark mode
      setGradient(
        "linear-gradient(to right, rgb(26, 24, 48) 0%, rgb(254, 163, 82) 50% "
      );
    } else {
      //light mode
      setGradient(
        "linear-gradient(to right, rgb(255, 246, 234) 0%, rgb(254, 163, 82) 50% "
      );
    }
    getData();
  }, [props]);

  return (
    <div className="fixed top-0 right-0 mt-16 h-screen overflow-y-auto bg-transparent text-black w-1/4">
      {/* First list */}
      <div className="list-group list-group-flush scrollarea">
        <div
          className=" h-20 text-center text-bold text-3xl justify-center flex items-center text-white" //bg-orange-400
          style={{ background: gradient }}
        >
          Suggestions
        </div>
        <SuggationsFriends userData={userData} mode={props.mode} />
      </div>
    </div>
  );
}

export default RightSideBar;