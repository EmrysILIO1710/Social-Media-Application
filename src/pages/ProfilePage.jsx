import * as React from "react";
import "./ProfilePage.css";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Profcov from "../components/Profcov";
import Userimage from "../components/Userimage";
import Username from "../components/Username";
import EditProfBtn from "../components/EditProfBtn";
import About from "../components/About";
import Follow from "../components/Follow";
import MediaSection from "../components/MediaSection";

export default function ProfilePage(props) {
  React.useEffect(() => {
    props.handleCB(true);
  });
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
        <Profcov />
        <Userimage />
        <Username />
        <EditProfBtn />
        <About />
        <Follow />
        <MediaSection />
        {/* <Box sx={{  height: '100vh' }} /> */}
      </Container>
    </React.Fragment>
  );
}
