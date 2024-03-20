import React, { useState } from "react";
import "./Story.css";
// import story from "../pictures/story.jpg";

// import prof from '../pictures/sampleprof2.jpg';

const Story = (props) => {
  const [circle, setCircle] = useState("5px solid rgb(254, 163, 82)");
  const [modetext, setModetext] = React.useState("black");
  // const [modeTrigger, setModeTrigger] = React.useState(0);

  React.useEffect(() => {
    // setModeTrigger(1);
    // console.log(props.mode);
    if (props.mode) {
      //dark mode
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
    }
  }, [props.mode]);

  const changeBorder = () => {
    setCircle("5px solid grey");
  };

  return (
    <>
      <div className="Story-box" onClick={props.onClick}>
        <div
          className="Story-container"
          style={{ border: circle }}
          onClick={changeBorder}
        >
          <img src={props.profilepic} alt="" className="Story-dp" />
        </div>
        <h3 style={{ textAlign: "center", color: modetext }}>{props.user}</h3>
      </div>
    </>
  );
};

export default Story;
