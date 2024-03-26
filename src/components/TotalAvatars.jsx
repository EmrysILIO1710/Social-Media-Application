import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import LikedByList from "./LikedByList";

export default function TotalAvatars(props) {
  const [disp, setDisp] = React.useState(false);

  return (
    <>
      <AvatarGroup max={25} total={props.count} onClick={() => {setDisp(true)}} className="cursor-pointer">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </AvatarGroup>
      <LikedByList show={disp} onClose={() => {setDisp(false)}} mode={props.mode} />
    </>
  );
}
