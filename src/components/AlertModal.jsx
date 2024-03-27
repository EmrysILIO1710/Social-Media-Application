import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SecondAlertModel from "./SecondAlertModel";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function AlertModal() {
  const [open, setOpen] = React.useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      {open ? (
        <>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning">
              Complete all profile settings{" "}
              <Link to="/profilepage">profile</Link>
              <div
                className="flex
              justify-center items-center rounded-full bg-orange-300 w-6 h-6 float-end ml-80 "
              >
                <button onClick={handleShow}>
                  <RxCross1 />
                </button>
              </div>
            </Alert>
          </Stack>
          {showModal && <SecondAlertModel handleClose={handleClose} />}
        </>
      ) : null}
    </>
  );
}
