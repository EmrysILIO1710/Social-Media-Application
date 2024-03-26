import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(254, 163, 82)",
    },
    secondary: purple,
  },
});

export default function FollowRequest(props) {
  return (
    <ThemeProvider theme={theme}>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.dp} />
          </ListItemAvatar>
          <ListItemText
            primary= {props.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <Stack spacing={2} direction="rowu" sx={{marginTop: '8px'}}>
                    <Button variant="contained">Accept</Button>
                    <Button variant="text">Decline</Button>
                  </Stack>
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </ThemeProvider>
  );
}
