import React, { useState, useEffect } from "react";
import "./RightSideBar.css";
import ChatFriends from "./ChatFriends";

function ChatProfiles(props) {
  const [userData, setUserData] = useState([]);
  // const [gradient, setGradient] = useState(
  //   "linear-gradient(to right, rgb(255, 246, 234, 0) 0%, rgb(254, 163, 82) 50% "
  // );

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
      // setGradient(
      //   "linear-gradient(to right, rgb(26, 24, 48, 0) 0%, rgb(254, 163, 82) 60% "
      // );
    } else {
      //light mode
      // setGradient(
      //   "linear-gradient(to right, rgb(255, 246, 234, 0) 0%, rgb(254, 163, 82) 50% "
      // );
    }
    getData();
  }, [props]);

  return (
    <div className="fixed top-0 right-0 mt-16 h-screen w-full overflow-y-auto bg-transparent float-left text-black scrollarea">
      {/* First list */}
      <div className="">
        <ChatFriends userData={userData} mode={props.mode} />
      </div>
    </div>
  );
}

export default ChatProfiles;