import React, { useState } from 'react';
import './Story.css';
// import story from "../pictures/story.jpg";

// import prof from '../pictures/sampleprof2.jpg';

const Story = (props) => {
    const [circle, setCircle] = useState("5px solid rgb(254, 163, 82)");

    const changeBorder = () => {
        setCircle("5px solid grey")
    }
    
    return(
        <>
            <div className='Story-box' onClick={props.onClick} >
                <div className="Story-container" style={{border: circle}} onClick={changeBorder}>
                    <img src={props.profilepic} alt="" className='Story-dp' />
                </div>
                <h3 style={{textAlign: "center"}}>{props.user}</h3>
            </div>

            
        </>
    );
};

export default Story;
