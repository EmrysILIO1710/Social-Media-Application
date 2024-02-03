import React, {  useRef, useState } from "react";
import './StoryArea.css';
import dp1 from '../pictures/sampleprof.jpg';
import post1 from '../pictures/samplepost.jpg';
import dp2 from '../pictures/sampleprof2.jpg';
import post2 from '../pictures/samplepost2.jpg';
import dp3 from '../pictures/sampleprof3.jpg';
import post3 from '../pictures/samplepost3.jpg';
import Story from "./Story";
import { useIsOverflow } from './useIsOverflow';
import StoryContent from "./StoryContent";


const StoryArea = () => {
    // const [overflow, setOverflow] = useState(0);
    // const [border, setBorder] = useState("5px solid rgb(254, 163, 82)");
    // const [show, setShow] = useState("none");
    const [val, setVal] = useState(0);

    const ref = useRef();
    const isOverflow = useIsOverflow(ref);
    const box = ref.current?.querySelector('.SA-content');

    // console.log(isOverflow);
    // console.log(show);

    

    const next = () => {
        const scroll = box.scrollLeft;
        console.log(box);
        box.scrollLeft = scroll + 200;
    }
    const Callback = (data) => {
        setVal(data);
    }
    

    const arrStory = [
        {
            id: 1,
            name: "arda02ran",
            pp: dp1,
            pic: post1,
            visual: "none"
        },
        {
            id: 2,
            name: "_.eve._",
            pp: dp2,
            pic: post3,
            visual: "none"
        },
        {
            id: 3,
            name: "sama_hell",
            pp: dp3,
            pic: post2,
            visual: "none"
        }
    ];

    return(
        <>
            <div className="SA-container" ref={ref}>
                <div className="SA-content">
                    <button className="SA-left">{`<`}</button>
                    {
                        arrStory.map((item) => (
                            <>
                                <Story 
                                    key = {item.id}
                                    user = {item.name}
                                    content = {item.pic}
                                    // circle = {border}
                                    profilepic = {item.pp}
                                    onClick = {() => {
                                        setVal(item.id); 
                                    }}
                                    
                                /> 
                                {/* <div className="SA-story"> */}
                                      
                                {/* </div> */}
                                
                                
                            </>
                        ))
                    }
                    
                    {
                        (isOverflow) ? <button className="SA-right" onClick={next} >{`>`}</button> : null
                    }
                </div>
            </div>
            {
                (val !== 0) ? <StoryContent
                    content = {arrStory[val - 1].pic}
                    handleCallback = {Callback}
                /> : null
            }
            
        </>
    );
};

export default StoryArea;