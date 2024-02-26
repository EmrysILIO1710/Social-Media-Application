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
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className='List-name'></div>
        </ListItemAvatar>
        <ListItemText
          primary={props.textHeading}
          
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    
  );
}