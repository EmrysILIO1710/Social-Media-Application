import React from "react";
import './MSPhotos.css';
import Photos from "./Photos";
// import dp1 from '../pictures/sampleprof.jpg';
// import post1 from '../pictures/samplepost.jpg';
// import dp2 from '../pictures/sampleprof2.jpg';
// import post2 from '../pictures/samplepost2.jpg';
// import dp3 from '../pictures/sampleprof3.jpg';
// import post3 from '../pictures/samplepost3.jpg';
const MSPhotos = (props) => {
    // const [arrlen, setArrlen] = useState(0);

    // const [photosArr, setPhotosArr] = useState([]);

    // useEffect(() => {
    //     setPhotosArr([{
    //         name: props.name,
    //         dp: props.dp,
    //         caption: props.about,
    //         pic: props.pic,
    //         loction: "Location"
    //     }, ...photosArr])
    // }, [props.name, props.dp, props.about, props.pic, photosArr])

    const photosArr = [{
        name: props.name,
        dp: props.dp,
        caption: props.about,
        pic: props.pic,
        loction: "Location"
    }];

    return(
        <>
            <div className="MSP-container">
                {
                    (photosArr.length !== 0) ? photosArr.map((item, key) => (
                        <Photos 
                            key={key}
                            name={item.name}
                            dp={item.profPic}
                            pic={item.postImg}
                            caption={item.caption}
                            location={item.loc}
                        />
                    )) : <p className="MSP-null">You haven't posted anything yet...</p>
                }
            </div>
        </>
    );
};
export default MSPhotos;