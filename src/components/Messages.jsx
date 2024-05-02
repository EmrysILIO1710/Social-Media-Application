import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { BiSolidMessage } from "react-icons/bi";
import ImageAvatars from './ImageAvatars';
import Example from './Example';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
const queryClient = new QueryClient();

export default function Messages(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersMessages mode={props.mode} />
    </QueryClientProvider>
  );
}

const UsersMessages = (props) => {
  const[disp, setDisp] = React.useState(false);
  const [name, setName] = React.useState("");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");
  // const [modeTrigger, setModeTrigger] = React.useState(0);

  React.useEffect(() => {
    // setModeTrigger(1);
    // console.log(props.mode);
    if(props.mode){
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    }
    else{
      //light mode
      setModetext("black");
      setModebg("white");
    }
  }, [props.mode]);

  const getData = async () => {
    const res = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
      method: "GET",
      headers: {
        "app-id": "65dca2b0afdc1b13e468846b",
      },
    });
    // console.log(res);
    return res.json();
  };

  const { data, error, isLoading } = useQuery("randomData", getData);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div></div>;

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeChat = () => {
    setDisp(false);
  }

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350, height: "100%" }}
      style={{backgroundColor: modebg, color: modetext, zIndex: 30}}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <p className='bg-[#FEA352] text-white text-left pl-6 py-3 text-bold text-3xl'>Chats</p>  
      {/* <Divider /> */}
      <List>
        
        {(data.data).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
                setDisp(true);
                setName(item.firstName + " " + item.lastName);
            }}>
              <ListItemIcon>
                <ImageAvatars pic={item.picture} />
              </ListItemIcon>
              <ListItemText primary={item.firstName + " " + item.lastName} secondary={""} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        {/* {console.log(data.data)} */}
          <button onClick={toggleDrawer('right', true)} className="relative hidden lg:block rounded-full bg-orange-300 p-2 text-black-400 hover:bg-orange-500 focus:outline-none z-30 hover:transition duration-500">
            <BiSolidMessage className="h-6 w-6" />
          </button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            sx={{zIndex: '30'}}
          >
            <Example display={disp} handleCB={closeChat} name={name} mode={props.mode} />
            {list('right')}
          </Drawer>
    </div>
  );
}
