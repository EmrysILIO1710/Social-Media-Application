import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ForumIcon from '@mui/icons-material/Forum';
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(254, 163, 82)  ",
    },
    secondary: purple,
  },
});

export default function LabelBottomNavigation(props) {
  const [value, setValue] = React.useState("home");
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("grey");

  const navigate = useNavigate();

  React.useEffect(() => {
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModebg("rgb(15, 12, 39)");
      setModetext("white");
    } else {
      //light mode
      setModetext("grey");
      setModebg("white");
    }
  }, [props.mode]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="block lg:hidden z-50">
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", bottom: 0, boxShadow: "2px 2px 10px black", bgcolor: modebg }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon  />}
          sx={{color: modetext}}
          onClick={() => {navigate('/feed')}}
        />
        <BottomNavigationAction
          label="Videos"
          value="videos"
          icon={<OndemandVideoIcon  />}
          sx={{color: modetext}}
          onClick={() => {navigate('/videos')}}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon  />}
          sx={{color: modetext}}
          onClick={() => {navigate('/search')}}
        />
        <BottomNavigationAction
          label="Chat"
          value="chat"
          icon={<ForumIcon  />}
          sx={{color: modetext}}
        />
      </BottomNavigation>
    </div>
    </ThemeProvider>
  );
}
