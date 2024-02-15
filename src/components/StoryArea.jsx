import React, { useRef, useState } from "react";
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
    const [scrolll, setScrolll] = useState(0);
    // const [scrollr, setScrollr] = useState(0);
    const ref = useRef();
    const isOverflow = useIsOverflow(ref);


    console.log(isOverflow);
    // console.log(show);

    

    const next = () => {
        const scroll = ref.current.scrollLeft;
        // console.log(scroll);
        ref.current.scrollLeft = scroll + 200;
        // console.log(ref.current.scrollLeft);
        setScrolll(ref.current.scrollLeft + 200);
        // setScrollr(ref.current.scrollRight);
    }
    const prev = () => {
        const scroll = ref.current.scrollLeft;
        // console.log(scroll);
        ref.current.scrollLeft = scroll - 200;
        // console.log(ref.current.scrollLeft);
        setScrolll(ref.current.scrollLeft - 200);
        // setScrollr(ref.current.scrollRight);
    }
    const Callback = () => {
        setVal(0);
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
        <div className="SA">
            {
                (scrolll > 0) ? <button className="SA-left" onClick={prev}>{`<`}</button> : null
            }
            
            <div className="SA-container" ref={ref}>
                <div className="SA-content">
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
                </div>
                
            </div>
            {
                (isOverflow) ? <button className="SA-right" onClick={next} >{`>`}</button> : null
            }
            {
                (val !== 0) ? <StoryContent
                    content = {arrStory[val - 1].pic}
                    handleCallback = {Callback}
                /> : null
            }
            
        </div>
    );
};

export default StoryArea;