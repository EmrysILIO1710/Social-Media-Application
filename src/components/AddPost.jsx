import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import PostOptions from "./PostOptions";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(254, 163, 82)  ",
    },
    secondary: purple,
  },
});

const actions = [
  { icon: <AddAPhotoIcon />, name: "Photo" },
  { icon: <VideoCameraBackIcon />, name: "Video" },
  { icon: <HistoryEduIcon  />, name: "Thought" },
];

export default function AddPost({ addPost, mode }) {
  const [open, setOpen] = React.useState(false);
  const [showChildModal, setShowChildModal] = React.useState(false);
  const [val, setVal] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenChildModal = () => {
    setOpen(false);
    setTimeout(() => {
      setShowChildModal(true);
    }, 300);
  };
  const handleCloseChildModal = () => {
    setShowChildModal(false);
  };
  const handleUpload = (name, dp, cc, post) => {
    addPost(name, dp, cc, post, val);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 320,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: 16,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 48, left: 40 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={"right"}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {setVal(action.name); handleOpenChildModal();}}
              //   sx={{bgcolor: "red"}}
            />
          ))}
          {showChildModal && (
            <div className="absolute right-0 bottom-24 flex space-x-4">
              <PostOptions
                onClose={handleCloseChildModal}
                onUpload={handleUpload}
                mode={mode}
                value={val}
              />
            </div>
          )}
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
}
