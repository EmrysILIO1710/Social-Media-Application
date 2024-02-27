import React, { useEffect, useState } from "react";
import './FeedPage.css';
// import Navbar from "../components/Navbar"; 
import StoryArea from "../components/StoryArea";
import PostArea from "../components/PostArea";
import BackgroundButton from "../components/BackgroundButton";
import { useLocation } from "react-router-dom";

const FeedPage = (props) => {
    const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    const location = useLocation();
    useEffect(() => {
        props.handleCB(true);
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location, props]);

    const handleDataFromBackgroundButton = (data) => {
        setDataFromBackgroundButton(data);
    }

    return(
        <div className="FP-container" style={{backgroundImage: `url(${dataFromBackgroundButton})`}}>
            <BackgroundButton sendDataToFeedPage={handleDataFromBackgroundButton} />
            {/* <Navbar /> */}
            <div className="FP-story">
                <StoryArea />
            </div>
            <PostArea />
        </div>
    );
}

export default FeedPage;