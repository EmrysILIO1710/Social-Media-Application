import * as React from "react";
import "./Photos.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import close from "../pictures/closewhite.png";
// import pic from '../pictures/sampleprof2.jpg';
// import loc from "../pictures/location.png";
import like from "../pictures/like2.png";
import like2 from "../pictures/like.png";
import share from "../pictures/share.png";
import wapp from "../pictures/whatsapp.png";
import facebook from "../pictures/facebook-logo.png";
import link from "../pictures/link.png";
import insta from "../pictures/instagram.png";
import message from "../pictures/message.png";
import deletecomm from "../pictures/deletecomm.png";

export default function Photos(props) {
  const [disp, setDisp] = React.useState("none");
  const [likes, setLikes] = React.useState(like);
  const [shr, setShr] = React.useState("none");
  const [comm, setComm] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [id, setId] = React.useState(1);
  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");
  
  React.useEffect(() => {
    if (props.mode) {
      //dark mode
      setModebg("rgb(15, 12, 39)");
      setModetext("white");
    } else {
      //light mode
      setModebg("white");
      setModetext("black");
    }
    const keyDownHandler = (event) => {
      //   console.log('User pressed: ', event.key);

      if (event.key === "Escape") {
        event.preventDefault();
        setDisp("none");
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [props]);

  const showAll = () => {
    if (disp === "none") {
      setDisp("block");
    } else {
      setDisp("none");
    }
  };
  const changeLike = () => {
    likes === like ? setLikes(like2) : setLikes(like);
  };
  const showShare = () => {
    shr === "none" ? setShr("block") : setShr("none");
  };
  const changeComment = (e) => {
    setComm(e.target.value);
  };
  const submitComment = (e) => {
    if (comm !== "") {
      setId((id) => id + 1);
      let value = {
        commId: id,
        commVal: comm,
      };
      setComments([value, ...comments]);
      setComm("");
      // console.log(comments.length);
    }
    e.preventDefault();
  };
  const commDelete = (id2) => {
    let commArr = comments.filter((item) => {
      return item.commId !== id2;
    });
    setComments(commArr);
    // console.log(comments.length);
    // if (comments.length === 1) {
    //   setCommicon(comment);
    // }
  };

  return (
    <>
      <Card sx={{ maxWidth: "19.8vw", marginBottom: "1vh", backgroundColor: modebg, color: modetext }}>
        <CardActionArea onClick={showAll}>
          <CardMedia
            component="img"
            height="200"
            image={props.pic}
            alt=""
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
            <Typography variant="body2">
              {props.caption}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <div className="Photos-container" style={{ display: disp }}>
        <img
          src={close}
          alt=""
          className="Photos-close"
          onClick={() => {
            setDisp("none");
          }}
        />
        <div className="Photos-box" style={{ backgroundColor: modebg }} >
          <div className="Photos-pic">
            <img src={props.pic} alt="" className="Photos-img" />
          </div>
          <div className="Photos-text">
            <div className="Photos-text-head">
              <div className="Photos-text-head-img">
                <img src={props.dp} alt="" style={{height: "100%"}} />
              </div>
              <div className="Photos-text-head-h">
                <h2>{props.name}</h2>
                <h4>{props.location}</h4>
              </div>
            </div>
            <div className="Photos-text-caption">
              <p>{props.caption}</p>
            </div>
            <div className="Photos-text-btns">
              <div className="Photos-share-box" style={{ display: shr }}>
                <div className="Photos-share-items">
                  <img src={wapp} alt="" className="Photos-share-img" />
                  <img src={facebook} alt="" className="Photos-share-img" />
                  <img src={insta} alt="" className="Photos-share-img" />
                  <img src={message} alt="" className="Photos-share-img" />
                  <img src={link} alt="" className="Photos-share-img" />
                </div>
                <svg height="20" width="20" className="Photos-svg">
                  <polygon
                    points="0,0 10,20 20,0"
                    style={{ fill: "rgb(254, 163, 82)" }}
                  />
                </svg>
              </div>
              <img
                src={likes}
                alt=""
                onClick={changeLike}
                className="Photos-text-btns-img"
              />
              <img
                src={share}
                alt=""
                onClick={showShare}
                className="Photos-text-btns-img"
              />
            </div>
            <hr />
            <div className="Photos-comment-section" style={{ display: "block" }}>
              {/* <hr className="Photo-line"/> */}
              <form onSubmit={submitComment}>
                <input
                  type="text"
                  className="Photos-comment"
                  value={comm}
                  onChange={changeComment}
                  placeholder="share your thoughts..."
                />
                <button className="Photos-comment-done-btn">Post</button>
              </form>
              {comments.length !== 0 ? (
                comments.map((item, key) => (
                  <div key={item.commId} className="Photos-comment-section2">
                    <span>
                      <span style={{ fontWeight: "bold" }}>YOU:</span>{" "}
                      {item.commVal} &nbsp;&nbsp;
                      <img
                        src={deletecomm}
                        alt=""
                        className="Photos-delete-comm"
                        onClick={() => {
                          commDelete(item.commId);
                        }}
                      />
                    </span>
                  </div>
                ))
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
