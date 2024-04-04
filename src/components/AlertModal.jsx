import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SecondAlertModel from "./SecondAlertModel";
import { useState } from "react";
// import { RxCross1 } from "react-icons/rx";

export default function AlertModal(props) {
  //commenting due to lack of usage currently, will add back during backend.
  // const [open, setOpen] = React.useState(true);

  const [showModal, setShowModal] = useState(false);
  const [modebg, setModebg] = useState("rgb(235, 253, 133)");

  React.useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("none");
      // setModetext("white");
    } else {
      //light mode
      setModebg("rgb(235, 253, 133)");
    }
  }, [ props]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      {true ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {/* <Alert severity="warning">
              Complete Setting up your profile{". "}
              <Link to="/profilepage">Get Started.</Link>
              <div
                className="flex justify-center rounded-full bg-orange-300 w-6 h-6 float-end ml-80 "
              >
                <button onClick={handleShow}>
                  <RxCross1 />
                </button>
              </div>
            </Alert> */}
            <Alert severity="warning" sx={{bgcolor: modebg}} onClose={handleShow}>
              Complete Setting up your profile{". "}
              <Link to="/profilepage">Get Started.</Link>
            </Alert>
          </Stack>
          {showModal && <SecondAlertModel mode={props.mode} handleClose={handleClose} />}
        </>
      ) : null}
    </>
  );
}
