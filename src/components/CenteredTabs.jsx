import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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

export default function CenteredTabs(props) {
  const [value, setValue] = React.useState(0);
  // const [selection, setSelection] = React.useState(1);

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
  const tab3 = () => {
    // setSelection(3);
    props.handleCB(3);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Posts" onClick={tab1} />
          <Tab label="Tagged" onClick={tab2} />
          <Tab label="Saved" onClick={tab3} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
