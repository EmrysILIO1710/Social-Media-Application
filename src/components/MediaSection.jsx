import React, { useState } from "react";
import './MediaSection.css';
import CenteredTabs from "./CenteredTabs";
import MSPhotos from "./MSPhotos";
import MSTagged from "./MSTagged";
import MSSaved from "./MSSaved";

const MediaSection = () => {
    const [val, setVal] = useState(1);
    const changeTab = (data) => {
        setVal(data);
    }

    return(
        <>
            <div className="MS-container">
                <CenteredTabs handleCB={changeTab} />
                <br />
                {
                    (val === 1) && <MSPhotos />
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