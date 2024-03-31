import React, { useEffect, useState } from "react";
import './PostArea.css';
import Posts from "./Posts";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from 'react-query';
// import PostButton from "./PostButton";
import AddPost from "./AddPost";
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
  const [modebg, setModebg] = useState("rgb(255, 246, 234)");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      // setModetext("white");
    } else {
      //light mode
      // setModetext("black");
      setModebg("rgb(255, 246, 234)");
    }

  }, [props]);
    
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

    const handleUpload = (name, dp, cc, post, val) => {
      setPostArr([{
        pic: dp,
        username: name,
        post: post,
        caption: cc,
        val: val
      }, ...postArr]);
      // console.log(postArr[0]);
    }

    return(
        <>
        {/* {console.log(props.mode)} */}
            <div className="PA-container" style={{backgroundColor: modebg}}>
              {
                (postArr.length !== 0) && postArr.map((item, key) => (
                  <Posts 
                    key = {key}
                    dp = {item.pic}
                    name = {item.username}
                    location = {"location"}
                    post = {item.post}
                    cc = {item.caption}
                    mode={props.mode}
                    likes={1}
                    val={item.val}
                    thumbnail={""}
                  />
                ))
              }
              {/* {console.log(value)} */}
                {
                    data.data.map((item, key) => (
                        <Posts 
                            key = {key}
                            dp = {item.owner.picture}
                            name = {item.owner.firstName + " " + item.owner.lastName}
                            location = {"location"}
                            post = {item.image}
                            cc = {item.text}
                            mode={props.mode}
                            likes={item.likes}
                            val={"Photo"}
                        />
                    ))
                }
                {/* <PostButton addPost={handleUpload} mode={props.mode} /> */}
                <AddPost addPost={handleUpload} mode={props.mode} />
            </div>
        </>
    );
}

