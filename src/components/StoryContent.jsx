import React, { useEffect, useState } from "react";
import likes from "../pictures/like2.png";
import likes2 from "../pictures/like.png";
import share from "../pictures/share.png";
import wapp from "../pictures/whatsapp.png";
import facebook from "../pictures/facebook-logo.png";
import link from "../pictures/link.png";
import insta from "../pictures/instagram.png";
import message from "../pictures/message.png";
import Close from '../pictures/cross.png'
// import pic from '../pictures/story.jpg';

const StoryContent = (props) => {
  // const [disp, setDisp] = useState("block");
  const [like, setLike] = useState(likes);
  const [comm, setComm] = useState("");
  const [shr, setShr] = useState("none");
  const [v, setV] = useState(1);

  useEffect(() => {
    const keyDownHandler = (event) => {
      //   console.log('User pressed: ', event.key);

      if (event.key === "Escape") {
        event.preventDefault();
        hideStory();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, );

  // const showStory = () => {
  //   setDisp("block");
  //   // setTimeout(() => {
  //   //     setDisp("none");
  //   // }, 30000);
  // };
  const hideStory = () => {
    // setDisp("none");
    setV(0);
    props.handleCallback(v)
  };
  const changeLike = () => {
    like === likes ? setLike(likes2) : setLike(likes);
  };
  const changeComm = (e) => {
    setComm(e.target.value);
  };
  const submitForm = (e) => {
    setComm("");
    e.preventDefault();
  };
  const showShare = () => {
    shr === "none" ? setShr("block") : setShr("none");
  };

  return (
    <>
      <div className="Story-content-box" style={{ display: "block" }}>
        <img src={Close} alt="" className="Story-close" onClick={hideStory} />
        <div className="Story-picture-box">
          <img src={props.content} alt="" className="Story-picture" />
          <div className="Story-btns">
            <div className="Story-share-box" style={{ display: shr }}>
              <div className="Story-share-items">
                <img src={wapp} alt="" className="Story-share-img" />
                <img src={facebook} alt="" className="Story-share-img" />
                <img src={insta} alt="" className="Story-share-img" />
                <img src={message} alt="" className="Story-share-img" />
                <img src={link} alt="" className="Story-share-img" />
              </div>
              <svg height="20" width="20" className="Story-svg">
                <polygon
                  points="0,0 10,20 20,0"
                  style={{ fill: "rgb(254, 163, 82)" }}
                />
              </svg>
            </div>
            <form onSubmit={submitForm} className="Story-form">
              <input
                type="text"
                value={comm}
                className="Story-comment"
                placeholder="add your thoughts..."
                onChange={changeComm}
              />
              <button className="Story-comment-done-btn">Done</button>
            </form>
            <img
              src={like}
              alt=""
              className="Story-like"
              onClick={changeLike}
            />
            <img
              src={share}
              alt=""
              className="Story-share"
              onClick={showShare}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryContent;