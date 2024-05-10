import React, { useState } from "react";
import './EditProfPage.css';
// import dpimg from '../pictures/sampleprof3.jpg';
import coverimg from "../pictures/background3.jpg";

const EditProfpage = (props) => {
  const [dpshadow, setDpshadow] = useState("none");
  const [covershadow, setCovershadow] = useState("none");
  const [dp, setDp] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const [cover, setCover] = useState(coverimg);
  const [user, setUser] = useState("emrysILIO_17");
  const [about, setAbout] = useState(
    "An engineer. A full stack developer. From London. Wish me on 23 March. Troublemaker, go-getter. Ain't no thang like a chick'n wing mamacita... #foodlover #backend #fullstack"
  );
  // const [epp, setEpp] = useState("block");

  const showDp = () => {
    setDpshadow("block");
  };
  const hideDp = () => {
    setDpshadow("none");
  };
  const showCover = () => {
    setCovershadow("block");
  };
  const hideCover = () => {
    setCovershadow("none");
  };
  const handleChangeDp = (e) => {
    setDp(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeCover = (e) => {
    setCover(URL.createObjectURL(e.target.files[0]));
  };
  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changeAbout = (e) => {
    setAbout(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    // SDTProfilePageFEPP(dp, cover, user, about);
    // setEpp("none");

    props.handleCB(dp, cover, user, about);
  };

  return (
    <div className="EPP bg-opacity-60 bg-black py-4 px-2 md:py-8 md:px-4 absolute z-50 top-0 left-0">
      <div className="EPP-container bg-orange-400 mx-auto md:w-3/4 lg:w-1/2 rounded-lg p-4">
        <form onSubmit={submitForm}>
          <h1 className="EPP-h2 text-center text-xl md:text-2xl font-bold">
            Edit Profile
          </h1>
          <br />
          <hr />
          <br />
          <h2 className="EPP-h2 text-center text-xl md:text-2xl font-bold">
            Change Profile Picture
          </h2>
          <div
            className="EPP-DP-box relative w-48 h-48 rounded-full overflow-hidden mx-auto"
            onMouseOver={showDp}
            onMouseOut={hideDp}
          >
            <img src={dp} alt="" className="EPP-img w-full absolute z-10" />
            <div
              className="EPP-shadow absolute w-full h-full bg-opacity-60 bg-black z-20 hidden flex justify-center items-center"
              style={{ display: dpshadow }}
            >
              <input
                type="file"
                onChange={handleChangeDp}
                className="EPP-DP-btn absolute w-24 h-10 bg-gray-800 text-white font-bold text-sm rounded-md cursor-pointer inset-1/3"
              />
            </div>
          </div>
          <br />
          <h2 className="EPP-h2 text-center text-xl md:text-2xl font-bold">
            Change Cover Picture
          </h2>
          <div
            className="EPP-cover-box w-4/5 h-64 mx-auto relative"
            onMouseOver={showCover}
            onMouseOut={hideCover}
          >
            <img src={cover} alt="" className="EPP-img w-full absolute z-10" />
            <div
              className="EPP-shadow absolute w-full h-full bg-opacity-60 bg-black z-20 hidden flex justify-center items-center"
              style={{ display: covershadow }}
            >
              <input
                type="file"
                onChange={handleChangeCover}
                className="EPP-cover-btn absolute w-24 h-10 bg-gray-800 text-white font-bold text-sm rounded-md cursor-pointer inset-1/3"
              />
            </div>
          </div>
          <h2 className="EPP-h2 text-center text-xl md:text-2xl font-bold">
            Change User Name
          </h2>
          <input
            type="text"
            placeholder="enter new username..."
            value={user}
            onChange={changeUser}
            className="EPP-input text-black md:w-3/4 lg:w-1/2 py-2 px-3 md:py-3 md:px-4 rounded-lg my-2 text-base md:text-lg outline-none border border-gray-300 focus:border-gray-500"
          />
          <h2 className="EPP-h2 text-center text-xl md:text-2xl font-bold">
            Change About
          </h2>
          <textarea
            cols="30"
            rows="10"
            placeholder="enter new bio..."
            className="EPP-input-bio text-black w-full md:w-3/4 lg:w-1/2 py-2 px-3 md:py-3 md:px-4 rounded-lg my-2 text-base md:text-lg outline-none border border-gray-300 focus:border-gray-500 h-32 md:h-40"
            value={about}
            onChange={changeAbout}
          ></textarea>
          <button
            type="submit"
            className="EPP-submit w-3/4 md:w-1/2 py-2 md:py-3 px-4 md:px-6 bg-white text-gray-800 font-bold text-lg md:text-xl rounded-lg my-2 shadow-md hover:bg-gray-200"
          >
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfpage;
