import * as React from "react";
import "./ProfilePage.css";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Profcov from "../components/Profcov";
import Userimage from "../components/Userimage";
import Username from "../components/Username";

import About from "../components/About";
// import Follow from "../components/Follow";
import MediaSection from "../components/MediaSection";
import { useLocation } from "react-router-dom";
import FollowUnfollowButton from "../components/FollowUnfollowButton";
import Followerfollowing from "../components/Followerfollowing";

export default function UserProfilePage(props) {
  
//   const [dp, setDp] = React.useState("");
//   const [cover, setCover] = React.useState("");
//   const [user, setUser] = React.useState("");
//   const [about, setAbout] = React.useState("");

  const location = useLocation();
  const {dataName, dataDp, dataAbout, dataPic} = location.state;
  React.useEffect(() => {
    props.handleCB(true);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location, props]);
//   const changeDets = (dataDp, dataCover, dataUser, dataAbout) => {
//     if (dataDp !== "") {
//       setDp(dataDp);
//     }
//     if (dataCover !== "") {
//       setCover(dataCover);
//     }
//     if (dataUser !== "") {
//       setUser(dataUser);
//     }
//     if (dataAbout !== "") {
//       setAbout(dataAbout);
//     }
//   };

  return (
    <React.Fragment>
      <CssBaseline />
      <svg
        height={"100%"}
        width={"100%"}
        className="pf-contact-svg
        xl:visible
        lg:visible
        md:visible
        sm:visible
      "
      >
        <circle cx="0%" cy="0%" r="60%" fill="rgb(252, 237, 218)" />
        <circle cx="100%" cy="100%" r="40%" fill="rgb(252, 237, 218)" />
      </svg>
      <Container maxWidth="lg" sx={{ marginTop: "1rem" }}>
        <Profcov cover={""} />
        <Userimage dp={dataDp} />
        <Username name={dataName} />
        <FollowUnfollowButton />
        <About about={dataAbout} />
        {/* <Follow /> */}
        <Followerfollowing />
        <MediaSection dp={dataDp} name={dataName} about={dataAbout} pic={dataPic} />
        {/* <Box sx={{  height: '100vh' }} /> */}
      </Container>
    </React.Fragment>
  );
}
