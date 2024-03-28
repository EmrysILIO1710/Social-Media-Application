import React from "react";
import './MSTagged.css';
import Photos from "./Photos";
// import dp1 from '../pictures/sampleprof.jpg';
// import post1 from '../pictures/samplepost.jpg';
// import dp2 from '../pictures/sampleprof2.jpg';
// import post2 from '../pictures/samplepost2.jpg';
// import dp3 from '../pictures/sampleprof3.jpg';
// import post3 from '../pictures/samplepost3.jpg';
const MSTagged = () => {
    // const [arrlen, setArrlen] = useState(0);

    const photosArr = [
        // {
        //     id: 1,
        //     name: "Arda Turan",
        //     loc: "Beverly Hills",
        //     caption: "Enjoying a beautiful time, flying across mountains and finally finding Kun Lun... \n\n#blessed #slayTheDragon #getFISTy",
        //     profPic: dp1,
        //     postImg: post1
        // },
        // {
        //     id: 2,
        //     name: "Evelyn ",
        //     loc: "San Jose",
        //     caption: "Staring into the unknown...well atleast trying to find Unknown......most preferably X and O.....hehe XO...get it? #gotchaCatch'emAll #journey #hailArceus",
        //     profPic: dp2,
        //     postImg: post3
        // },
        // {
        //     id: 3,
        //     name: "Samael The One",
        //     loc: "Elysium",
        //     caption: "A little light and sound show back home......Feeling bad for the guys back at the field #cerebusStay!",
        //     profPic: dp3,
        //     postImg: post2
        // }
    ]

    return(
        <>
            <div className="MST-container">
                {
                    (photosArr.length !== 0) ? photosArr.map((item) => (
                        <Photos 
                            key={item.id}
                            name={item.name}
                            dp={item.profPic}
                            pic={item.postImg}
                            caption={item.caption}
                            location={item.loc}
                        />
                    )) : <p className="MST-null">No one has tagged you in a post yet...</p>
                }
            </div>
        </>
    );
};
export default MSTagged;