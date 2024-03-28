import React, { useRef, useState } from "react";
import "./StoryArea.css";
import dp1 from "../pictures/sampleprof.jpg";
import post1 from "../pictures/samplepost.jpg";
import dp2 from "../pictures/sampleprof2.jpg";
import post2 from "../pictures/samplepost2.jpg";
import dp3 from "../pictures/sampleprof3.jpg";
import post3 from "../pictures/samplepost3.jpg";
import Story from "./Story";
import { useIsOverflow } from "./useIsOverflow";
import StoryContent from "./StoryContent";
import PostStoryButton from "./PostStoryButton";

const StoryArea = (props) => {
  const [val, setVal] = useState(0);
  const [c, setC] = useState(0);
  const [show, setShow] = useState(true);
  const [scrolll, setScrolll] = useState(0);
  const ref = useRef();
  const isOverflow = useIsOverflow(ref);
  const [story, setStory] = useState([]);

  const next = () => {
    const scroll = ref.current.scrollLeft;
    ref.current.scrollLeft = scroll + 200;
    setScrolll(ref.current.scrollLeft + 200);
  };

  const prev = () => {
    const scroll = ref.current.scrollLeft;
    ref.current.scrollLeft = scroll - 200;
    setScrolll(ref.current.scrollLeft - 200);
  };

  const Callback = () => {
    setC(0);
    setVal(0);
  };

  const handleUpload = (user, dp, inputValue, image) => {
    setStory([
      {
        id: 1,
        name: user,
        pp: dp,
        pic: image,
        visual: "none",
      }
    ]);
    setShow(false);
    // arrStory.push({
    //   id: arrStory.length,
    //   name: user,
    //   pp: dp,
    //   pic: image,
    //   visual: "none",
    // });
    // console.log(arrStory)
  };

  const arrStory = [
    {
      id: 1,
      name: "arda02ran",
      pp: dp1,
      pic: post1,
      visual: "none",
    },
    {
      id: 2,
      name: "_.eve._",
      pp: dp2,
      pic: post3,
      visual: "none",
    },
    {
      id: 3,
      name: "sama_hell",
      pp: dp3,
      pic: post2,
      visual: "none",
    },
  ];

  return (
    <div className="SA">
      {scrolll > 0 ? (
        <button className="SA-left" onClick={prev}>{`<`}</button>
      ) : null}

      <div className="SA-container" ref={ref}>
        <div className="SA-content">
          {
            show && <PostStoryButton
              profilepic="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              user="Blue lagoon"
              mode={props.mode}
              onUpload={handleUpload}
            />
          }
          {/* {console.log(story)} */}
          {story.length !== 0 &&
            story.map((item, key) => (
              <Story
                key={key}
                user={item.name}
                content={item.pic}
                profilepic={item.pp}
                onClick={() => {
                  setC(item.id);
                }}
                mode={props.mode}
              />
            ))}

          {arrStory.map((item) => (
            <Story
              key={item.id}
              user={item.name}
              content={item.pic}
              profilepic={item.pp}
              onClick={() => {
                setVal(item.id);
              }}
              mode={props.mode}
            />
          ))}
        </div>
      </div>
      {/* {console.log(isOverflow)} */}
      {isOverflow ? (
        <button className="SA-right" onClick={next}>{`>`}</button>
      ) : null}
      {val > 0 ? (
        <StoryContent
          content={arrStory[val - 1].pic}
          handleCallback={Callback}
        />
      ) : null}
      {c > 0 ? (
        <StoryContent
          content={story[0].pic}
          handleCallback={Callback}
        />
      ) : null}
    </div>
  );
};

export default StoryArea;
