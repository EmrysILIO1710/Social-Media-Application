import React, { useState } from "react";
import './BackgroundButton.css';
import bb from '../pictures/bacgroundicon.png';
import bg1 from '../pictures/background.jpg';
import bg2 from '../pictures/background2.jpg';
import bg3 from '../pictures/background3.jpg';
import bg4 from '../pictures/background4.jpg';
import bg5 from '../pictures/background5.jpg';
import bg6 from '../pictures/background6.jpg';

const BackgroundButton = ({ sendDataToPostArea }) => {
    const [dispbox, setDispbox] = useState("none");
    const [bgimg, setBgimg] = useState();

    const bgArr = [
        {
            id: 1,
            name: bg1
        },
        {
            id: 2,
            name: bg2
        },
        {
            id: 3,
            name: bg3
        },
        {
            id: 4,
            name: bg4
        },
        {
            id: 5,
            name: bg5
        },
        {
            id: 6,
            name: bg6
        }
    ];

    const showBox = () => {
        if(dispbox === "none"){
            setDispbox("block");
        }
        else{
            setDispbox("none");
        }
    }
    const changeBg = (b) => {
        setBgimg(b);
        sendDataToPostArea(bgimg);
    }

    return(
        <>
            <div className="BB-box">
                <img src={bb} alt="" className="BB-icon" onClick={showBox} />
                <div className="BB-container" style={{display: dispbox}}>
                    <svg height="20" width="20" className="BB-svg">
                        <polygon points="0,20 10,0 20,20" style={{fill: "rgb(254, 163, 82)"}} />
                    </svg>   
                    <div className="BB-imgs">
                        {
                            bgArr.map((item) => (
                                <img src={item.name} alt="" className="BB-pic" onClick={() => {
                                    changeBg(item.name);
                                }} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default BackgroundButton;