import * as React from 'react';
import "./AlignItemsList.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

export default function AlignItemsList(props) {
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");
  React.useEffect(() => {
    // setModeTrigger(1);
    console.log(props.mode);
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

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: modebg, color: modetext }}>
      <ListItem alignItems="flex">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.dp} />
          <div className='List-name'></div>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    
  );
}