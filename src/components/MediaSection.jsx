import React, { useState } from "react";
import './MediaSection.css';
import CenteredTabs from "./CenteredTabs";
import MSPhotos from "./MSPhotos";
import MSTagged from "./MSTagged";
import MSSaved from "./MSSaved";

const MediaSection = (props) => {
    const [val, setVal] = useState(1);
    const changeTab = (data) => {
        setVal(data);
    }

    return(
        <>
            <div className="MS-container absolute mx-16  mt-[180%] 
                sm:mt-[125%] sm:mx-32
                md:mt-[105%] md:mx-32
                xl:mx-28 xl:mt-[50%]
            ">
                <CenteredTabs handleCB={changeTab} />
                <br />
                {
                    (val === 1) && <MSPhotos dp={props.dp} name={props.name} about={props.about} pic={props.pic} mode={props.mode} />
                }
                {
                    (val === 2) && <MSTagged />
                }
                {
                    (val === 3) && <MSSaved />
                }
            </div>
        </>
    );
};

export default MediaSection;