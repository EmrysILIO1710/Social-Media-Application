import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(254, 163, 82)  ",
    },
    secondary: purple,
  },
});

export default function Centertabs(props) {
  const [modetext, setModetext] = React.useState("black");
  const [modebg, setModebg] = React.useState("white");
  const [value, setValue] = React.useState(0);

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tab1 = () => {
    // setSelection(1);
    props.handleCB(1);
  }
  const tab2 = () => {
    // setSelection(2);    
    props.handleCB(2);
  }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', bgcolor: modebg, color: modetext  }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Followers"  onClick={tab1} />
        <Tab label="Following"  onClick={tab2} />
        
      </Tabs>
    </Box>
    </ThemeProvider>
  );
}