import React, { useState,useEffect } from "react";
import SuggationsFriends from "./SuggationsFriends";

function RightSideBar() {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://dummyapi.io/data/v1/user?limit=99", {
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
    getData();
  }, []);

  return (
    <div className="fixed top-0 right-0 mt-16 h-screen overflow-y-auto bg-transparent text-black w-1/4">
      {/* First list */}
      <div className="list-group list-group-flush scrollarea">
        <div className="text-2xl bg-orange-400 h-20 text-center justify-center rounded-l-2xl flex items-center text-white">
          Suggetions
        </div>
        <SuggationsFriends userData={userData} />
      </div>
    </div>
  );
}

export default RightSideBar;
