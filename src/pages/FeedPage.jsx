import React, { useState } from "react";
import './FeedPage.css';
import Navbar from "../components/Navbar";
import StoryArea from "../components/StoryArea";
import PostArea from "../components/PostArea";
import BackgroundButton from "../components/BackgroundButton";

const FeedPage = () => {
    const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    const handleDataFromBackgroundButton = (data) => {
        setDataFromBackgroundButton(data);
    }

    return(
        <div className="FP-container" style={{backgroundImage: `url(${dataFromBackgroundButton})`}}>
            <BackgroundButton sendDataToFeedPage={handleDataFromBackgroundButton} />
            <Navbar />
            <div className="FP-story">
                <StoryArea />
            </div>
            <PostArea />
        </div>
    );
}

export default FeedPage;