import * as React from "react";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";

import Centertabs from "./Centertabs";
import Followers from "./Followers";
import Following from "./Following";
import Follow from "./Follow";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const [val, setVal] = React.useState(1);
  const changeTab = (data) => {
    setVal(data);
  };
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Centertabs handleCB={changeTab} />
      {val === 1 && <Followers />}
      {val === 2 && <Following />}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Followerfollowing() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>
        <Follow />
      </button>
      
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
