import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");

  React.useEffect(() => {
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModebg("rgb(15, 12, 39)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("white");
    }
  }, [props.mode]);

  return (
    <Card sx={{ width: 300, marginBottom: "20px", backgroundColor: modebg }}>
      <CardMedia
        sx={{ height: 300 }}
        image={props.dp}
        // title="green iguana"
      />
      <CardContent style={{}}>
        <Link
          to={"/userprofile"}
          state={{
            dataName: props.name,
            dataDp: props.dp,
            dataAbout: props.cc,
            dataPic: props.picture,
          }}
          style={{ textDecoration: "none", color: modetext }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ cursor: "pointer" }}
          >
            {props.name}
          </Typography>
        </Link>
        <Typography variant="body2" color={modetext}>
          {props.cc}
        </Typography>
      </CardContent>
    </Card>
  );
}
