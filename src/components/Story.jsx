import React, { useState } from 'react';
import './Story.css';
import close from "../pictures/close.png";
import story from "../pictures/story.jpg";
import likes from "../pictures/likes.png";

const Story = () => {
    const [disp, setDisp]=useState("none");
    const showStory=()=>{
        setDisp("block");
    }
    const hideStory=()=>{
        setDisp("none");
    }
    return(
        <>
            <div className="Story-container" onClick={showStory}>

            </div>

            <div className='Story-content-box' style={{display: disp}}>
                <img src={close} alt="" className='Story-close' onClick={hideStory}/>
                <div className='Story-picture-box' >
                    <img src={story} alt="" className='Story-picture' />
                    <img src={likes} alt="" className=''/>
                 </div>
            </div>
        </>
    );
};

export default Story;