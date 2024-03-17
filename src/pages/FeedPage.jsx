import React, { useEffect } from "react";
import './FeedPage.css';
// import Navbar from "../components/Navbar"; 
import StoryArea from "../components/StoryArea";
import PostArea from "../components/PostArea";
// import BackgroundButton from "../components/BackgroundButton";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";

const FeedPage = (props) => {
    // const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    const location = useLocation();
    useEffect(() => {
        props.handleCB(true);
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location, props]);

    // const handleDataFromBackgroundButton = (data) => {
    //     setDataFromBackgroundButton(data);
    // }

    return(
        //style={{backgroundImage: `url(${dataFromBackgroundButton})`}} Add this on the div below to change the background
        <div className="FP-container" >
            {/* <BackgroundButton sendDataToFeedPage={handleDataFromBackgroundButton} /> */}
            {/* <Navbar /> */}
            <div className="FP-story">
                <StoryArea />
            </div>
            <PostArea />
            <SideBar className="z-40"/>
        </div>
    );
}

export default FeedPage;