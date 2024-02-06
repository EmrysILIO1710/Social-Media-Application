import React from "react";
import './PostArea.css';
import Posts from "./Posts";
import dp1 from '../pictures/sampleprof.jpg';
import post1 from '../pictures/samplepost.jpg';
import dp2 from '../pictures/sampleprof2.jpg';
import post2 from '../pictures/samplepost2.jpg';
import dp3 from '../pictures/sampleprof3.jpg';
import post3 from '../pictures/samplepost3.jpg';
// import bg from '../pictures/background.jpg';
// import BackgroundButton from "./BackgroundButton";

const PostArea = () => {
    // const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    // const handleDataFromBackgroundButton = (data) => {
    //     setDataFromBackgroundButton(data);
    // }

    let arrPosts = [
        {
            id: 1,
            name: "Arda Turan",
            loc: "Beverly Hills",
            caption: "Enjoying a beautiful time, flying across mountains and finally finding Kun Lun... \n\n#blessed #slayTheDragon #getFISTy",
            profPic: dp1,
            postImg: post1
        },
        {
            id: 2,
            name: "Evelyn ",
            loc: "San Jose",
            caption: "Staring into the unknown...well atleast trying to find Unknown......most preferably X and O.....hehe XO...get it? #gotchaCatch'emAll #journey #hailArceus",
            profPic: dp2,
            postImg: post3
        },
        {
            id: 3,
            name: "Samael The One",
            loc: "Elysium",
            caption: "A little light and sound show back home......Feeling bad for the guys back at the field #cerebusStay!",
            profPic: dp3,
            postImg: post2
        }
    ]

    return(
        <>
            <div className="PA-container">
                {/* <BackgroundButton sendDataToPostArea={handleDataFromBackgroundButton} /> */}
                {
                    arrPosts.map((item) => (
                        <Posts 
                            key = {item.id}
                            dp = {item.profPic}
                            name = {item.name}
                            location = {item.loc}
                            picture = {item.postImg}
                            cc = {item.caption}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default PostArea;