import React, { useState } from "react";
import "./FollowUnfollowButton.css";
// import EditProfpage from "../pages/EditProfPage";
// import { useNavigate } from "react-router-dom";

const FollowUnfollowButton = (props) => {
  // const navigate = useNavigate();
  const [border, setBorder] = useState("none");
  const [bg, setBg] = useState("rgb(254, 163, 82)");
  const [val, setVal] = useState("Follow");
  // const [dp, setDp] = useState("");
  // const [cover, setCover] = useState("");
  // const [user, setUser] = useState("");
  // const [about, setAbout] = useState("");

  const follow = (e) => {
    if (val === "Follow") {
      setVal("Unfollow");
      setBg("rgba(254, 162, 82, 0)");
      setBorder("3px solid rgb(254, 163, 82)");
    } else {
      setVal("Follow");
      setBg("rgba(254, 162, 82)");
      setBorder("none");
    }
    e.preventDefault();
    // setVal(1);
    // navigate("/editprofpage");
  };
  // const changeVal = (dataDp, dataCover, dataUser, dataAbout) => {
  //     setVal(0);
  //     props.handleCB2(dataDp, dataCover, dataUser, dataAbout);
  // }
  return (
    <>
      <form onClick={follow}>
        <button
          className="FU-btn w-60 w-52 text-center
                    sm:w-60
                    xl:w-72 "
          style={{ backgroundColor: bg, border: border }}
        >
          <p className="text-lg text-bold my-auto text-black">{val}</p>
        </button>
      </form>
    </>
  );
};

export default FollowUnfollowButton;
