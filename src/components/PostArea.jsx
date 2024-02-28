import React from "react";
import './PostArea.css';
import Posts from "./Posts";
// import dp1 from '../pictures/sampleprof.jpg';
// import post1 from '../pictures/samplepost.jpg';
// import dp2 from '../pictures/sampleprof2.jpg';
// import post2 from '../pictures/samplepost2.jpg';
// import dp3 from '../pictures/sampleprof3.jpg';
// import post3 from '../pictures/samplepost3.jpg';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from 'react-query';
const queryClient = new QueryClient();
// import bg from '../pictures/background.jpg';
// import BackgroundButton from "./BackgroundButton";
export default function PostArea() {
    return (
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
  }

const Users = () => {
    // const [dataFromBackgroundButton, setDataFromBackgroundButton] = useState("");

    // const handleDataFromBackgroundButton = (data) => {
    //     setDataFromBackgroundButton(data);
    // }
    const getData = async () => {
        const res = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
          method: "GET",
          headers: {
            "app-id": "65dca2b0afdc1b13e468846b",
          },
        });
        // console.log(res);
        return res.json();
    };
    
    const { data, error, isLoading } = useQuery("randomData", getData);
    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div></div>;

    // let arrPosts = [
    //     {
    //         id: 1,
    //         name: "Arda Turan",
    //         loc: "Beverly Hills",
    //         caption: "Enjoying a beautiful time, flying across mountains and finally finding Kun Lun... \n\n#blessed #slayTheDragon #getFISTy",
    //         profPic: dp1,
    //         postImg: post1
    //     },
    //     {
    //         id: 2,
    //         name: "Evelyn ",
    //         loc: "San Jose",
    //         caption: "Staring into the unknown...well atleast trying to find Unknown......most preferably X and O.....hehe XO...get it? #gotchaCatch'emAll #journey #hailArceus",
    //         profPic: dp2,
    //         postImg: post3
    //     },
    //     {
    //         id: 3,
    //         name: "Samael The One",
    //         loc: "Elysium",
    //         caption: "A little light and sound show back home......Feeling bad for the guys back at the field #cerebusStay!",
    //         profPic: dp3,
    //         postImg: post2
    //     }
    // ]

    return(
        <>
            {console.log(data.data)}
            <div className="PA-container">
                {/* <BackgroundButton sendDataToPostArea={handleDataFromBackgroundButton} /> */}
                {
                    data.data.map((item, key) => (
                        <Posts 
                            key = {key}
                            dp = {item.owner.picture}
                            name = {item.owner.firstName + " " + item.owner.lastName}
                            location = {"location"}
                            picture = {item.image}
                            cc = {item.text}
                        />
                    ))
                }
            </div>
        </>
    );
}

// export default PostArea;