import React, { useEffect, useState } from "react";
import './FeedPage.css';
// import Navbar from "../components/Navbar";
import StoryArea from "../components/StoryArea";
import PostArea from "../components/PostArea";
import BackgroundButton from "../components/BackgroundButton";

const FeedPage = (props) => {
    const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    useEffect(() => {
        props.handleCB(true);
    },);

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