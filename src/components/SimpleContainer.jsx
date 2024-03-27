import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import MediaCard from "./MediaCard";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

export default function SimpleContainer(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* {console.log(props.mode)} */}
      <Area mode={props.mode} />
    </QueryClientProvider>
  );
}

const Area = (props) => {
  const [modetext, setModetext] = React.useState("black");

  React.useEffect(() => {
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
    }
  }, [props.mode]);

  const getData = async () => {
    const res = await fetch("https://dummyapi.io/data/v1/post?limit=20", {
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <div style={{ backgroundColor: "rgb(0, 0, 0, 0)", width: "45vw", height: "auto", margin: "0 auto", padding: "20px 0" }}>
          <h1 className="mt-16 font-bold" style={{color: modetext}} >Mutuals</h1><br />
          <div className="flex flex-wrap justify-around">
            {
                data.data.map((item, key) => (
                    <MediaCard
                        key = {key}
                        dp = {item.owner.picture}
                        name = {item.owner.firstName + " " + item.owner.lastName}
                        location = {"location"}
                        picture = {item.image}
                        cc = {item.text}
                        mode={props.mode}
                        likes={item.likes}
                    />
                ))
            }
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
