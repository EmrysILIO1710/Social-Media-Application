import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// const options = [
//   'Save',
// ];

const ITEM_HEIGHT = 48;

export default function SaveDeleteOption(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");

  React.useEffect(() => {
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48) ");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("white");
    }
  }, [props]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{ margin: "0 10px" }}
      >
        <MoreVertIcon style={{color: modetext}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            color: modetext,
            backgroundColor: modebg
          },
        }}
      >
        {props.savedel ? (
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>Save</MenuItem>
        )}
      </Menu>
    </div>
  );
}
