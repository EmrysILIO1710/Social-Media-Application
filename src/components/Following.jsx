import React from "react";
import AlignItemsList from "./AlignItemsList";
// import AlignItemsList from "./AlignItemsList";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
const queryClient = new QueryClient();
export default function Trial() {
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
      const res = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
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
        {/* <div className="PA-container"> */}
            {/* <BackgroundButton sendDataToFollowes={handleDataFromBackgroundButton} /> */}
            {
                data.data.map((item, key) => (
                    <AlignItemsList
                        key = {key}
                        dp = {item.picture}
                        name = {item.firstName + " " + item.lastName}
                        
                        
                    />
                ))
            }
        {/* </div> */}
    </>
);
}

// export default Following;
  
  
  