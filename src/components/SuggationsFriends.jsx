import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const SuggationsFriends = ({ userData, mode }) => {
  const [followedUsers, setFollowedUsers] = useState([]);
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (mode) {
      //dark mode
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
    }
  }, [mode]);

  const handleFollow = (userId) => {
    if (followedUsers.includes(userId)) {
      setFollowedUsers(followedUsers.filter((id) => id !== userId));
    } else {
      setFollowedUsers([...followedUsers, userId]);
    }
  };

  const handleRemove = (userId) => {
    alert("Do you want to remove this user?");
    console.log("Remove user with id: ", userId);
    // Additional backend logic can be added here
  };

  return (
    <div>
      {userData.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between px-4 py-3 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-md active:shadow-none hover:cursor-pointer"
        >
          <div className="flex items-center">
            <div className="h-14 w-14 overflow-hidden rounded-full mr-4">
              <img
                className="h-full w-full object-cover"
                src={user.owner.picture}
                alt={`${user.owner.firstName} ${user.owner.lastName}`}
              />
            </div>
            <div>
              <Link
                to={"/userprofile"}
                state={{
                  dataName: user.owner.firstName + " " + user.owner.lastName,
                  dataDp: user.owner.picture,
                  dataAbout: user.text,
                  dataPic: user.image,
                }}
                className="no-underline"
              >
                <p className="text-lg font-bold" style={{ color: modetext }}>
                  {`${user.owner.firstName} ${user.owner.lastName}`}
                </p>
              </Link>
            </div>
          </div>

          <div className="flex">
            <button
              className="flex items-center justify-center w-fit px-3 h-10 mr-2 bg-orange-400 rounded-full hover:bg-orange-500"
              onClick={() => handleFollow(user.id)}
            >
              <div className="text-white text-lg">
                {followedUsers.includes(user.id) ? "Unfollow" : "Follow"}
              </div>
            </button>

            <button
              className="flex items-center justify-center w-10 h-10 bg-transparent rounded-full "
              onClick={() => handleRemove(user.id)}
            >
              <RxCross1 style={{ color: modetext }} size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggationsFriends;