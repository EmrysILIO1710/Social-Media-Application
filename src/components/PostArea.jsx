import React, { useState } from "react";
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
import PostButton from "./PostButton";
const queryClient = new QueryClient();

export default function PostArea(props) {
    return (
      <QueryClientProvider client={queryClient}>
        {/* {console.log(props.mode)} */}
        <Users mode={props.mode} />
      </QueryClientProvider>
    );
  }

const Users = (props) => {
  // const [username, setUsername] = useState("");
  // const [dp, setDp] = useState("");
  // const [caption, setCaption] = useState("");
  // const [image, setImage] = useState();
  const [postArr, setPostArr] = useState([]);
    
    const getData = async () => {
        const res = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
          method: "GET",
          headers: {
            "app-id": "65dca2b0afdc1b13e468846b",
          },
        });
        return res.json();
    };
    
    const { data, error, isLoading } = useQuery("randomData", getData);
    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div></div>;

    const handleUpload = (name, dp, cc, post) => {
      // setUsername(name);
      // setDp(dp);
      // setCaption(cc);
      // setImage(post);
      setPostArr([{
        pic: dp,
        username: name,
        image: post,
        caption: cc
      }, ...postArr]);
      console.log(postArr[0]);
    }

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
        {/* {console.log(props.mode)} */}
            <div className="PA-container">
              {
                (postArr.length !== 0) && postArr.map((item, key) => (
                  <Posts 
                    key = {key}
                    dp = {item.pic}
                    name = {item.username}
                    location = {"location"}
                    picture = {item.image}
                    cc = {item.caption}
                    mode={props.mode}
                  />
                ))
              }
                {
                    data.data.map((item, key) => (
                        <Posts 
                            key = {key}
                            dp = {item.owner.picture}
                            name = {item.owner.firstName + " " + item.owner.lastName}
                            location = {"location"}
                            picture = {item.image}
                            cc = {item.text}
                            mode={props.mode}
                        />
                    ))
                }
                <PostButton addPost={handleUpload} mode={props.mode} />
            </div>
        </>
    );
}

