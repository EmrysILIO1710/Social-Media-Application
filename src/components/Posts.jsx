import React, { useState } from "react";
import "./Posts.css";
import like from "../pictures/like.png";
import share from "../pictures/share.png";
import comment from "../pictures/comment.png";
import comment2 from "../pictures/comment1.png";
import like2 from "../pictures/like2.png";
import wapp from "../pictures/whatsapp.png";
import facebook from "../pictures/facebook-logo.png";
import link from "../pictures/link.png";
import insta from "../pictures/instagram.png";
import message from "../pictures/message.png";
import save from "../pictures/save.png";
import save2 from "../pictures/save2.png";
// import image from '../pictures/samplepost.jpg';
// import dp from '../pictures/sampleprof.jpg';
import deletecomm from "../pictures/deletecomm.png";
import { Link } from "react-router-dom";
import TotalAvatars from "./TotalAvatars";

const Posts = (props) => {
  const [likeicon, setLikeicon] = useState(like2);
  const [dispshare, setDispshare] = useState("none");
  const [comm, setComm] = useState("");
  const [comments, setComments] = useState([]);
  const [id, setId] = useState(1);
  const [dispcomm, setDispcomm] = useState("none");
  const [commicon, setCommicon] = useState(comment);
  const [keep, setKeep] = useState(save);

  const [modebg, setModebg] = React.useState("white");
  const [modetext, setModetext] = React.useState("black");
  // const [modeTrigger, setModeTrigger] = useState(0);

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

  const changeLike = () => {
    if (likeicon === like2) {
      setLikeicon(like);
    } else {
      setLikeicon(like2);
    }
  };
  const showShare = () => {
    if (dispshare === "none") {
      setDispshare("block");
      setTimeout(() => {
        setDispshare("none");
      }, 10000);
    } else {
      setDispshare("none");
    }
  };
  const showComm = () => {
    if (dispcomm === "none") {
      setDispcomm("block");
    } else {
      setDispcomm("none");
    }
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
      setCommicon(comment2);
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
    if (comments.length === 1) {
      setCommicon(comment);
    }
  };
  const changeSave = () => {
    if (keep === save) {
      setKeep(save2);
    } else {
      setKeep(save);
    }
  };
  // const data = {
  //     dataName: props.name,
  //     dataDp: props.dp
  // }
  return (
    <>
      <div
        className="Post-container"
        style={{ backgroundColor: modebg, color: modetext }}
      >
        <div className="Post-header">
          <div className="Post-DP">
            <Link
              to={"/userprofile"}
              state={{
                dataName: props.name,
                dataDp: props.dp,
                dataAbout: props.cc,
                dataPic: props.picture,
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={props.dp} alt="" className="Post-dp-img" />
            </Link>
          </div>
          <div className="Post-name">
            <Link
              to={"/userprofile"}
              state={{
                dataName: props.name,
                dataDp: props.dp,
                dataAbout: props.cc,
                dataPic: props.picture
              }}
              style={{ textDecoration: "none", color: modetext }}
            >
              <h2 style={{ fontSize: "25px", cursor: "pointer" }}>
                {props.name}
              </h2>
            </Link>
            <h5>{props.location}</h5>
          </div>
          <img src={keep} alt="" className="Post-save" onClick={changeSave} />
        </div>
        <div className="Post-body">
          <img src={props.picture} alt="" className="Post-img" />
        </div>
        <div className="Post-caption">
          <p>{props.cc}</p>
        </div>
        
        <hr className="Post-line" />
        {
          (props.likes > 0) ? 
            <div className="Post-caption flex text-gray-500 text-sm">
              <p className="cursor-pointer mt-2">Liked by...&nbsp;&nbsp;</p><TotalAvatars count={props.likes} mode={props.mode} />
            </div> : null
        }
        <div className="Post-btns">
          <div className="Post-share" style={{ display: dispshare }}>
            <div className="Post-share-items">
              <img src={wapp} alt="" className="Post-share-img" />
              <img src={facebook} alt="" className="Post-share-img" />
              <img src={insta} alt="" className="Post-share-img" />
              <img src={message} alt="" className="Post-share-img" />
              <img src={link} alt="" className="Post-share-img" />
            </div>
            <svg height="20" width="20" className="Post-svg">
              <polygon
                points="0,0 10,20 20,0"
                style={{ fill: "rgb(254, 163, 82)" }}
              />
            </svg>
          </div>
          <button className="Post-like-btn flex items-center place-content-center">
            
            <img
              src={likeicon}
              alt=""
              style={{ width: "40px", cursor: "pointer" }}
              onClick={changeLike}
            />
            {
              (props.likes > 0) ? <span>&nbsp;&nbsp;{props.likes}</span> : null
            }
          </button>
          <button className="Post-share-btn">
            <img
              src={share}
              alt=""
              style={{ width: "35px", cursor: "pointer", margin: "0 auto" }}
              onClick={showShare}
            />
          </button>
          <button className="Post-comment-btn">
            <img
              src={commicon}
              alt=""
              style={{ width: "35px", cursor: "pointer", margin: "0 auto" }}
              onClick={showComm}
            />
          </button>
        </div>
        <div className="Post-comment-section" style={{ display: dispcomm }}>
          {/* <hr className="Post-line"/> */}
          <form onSubmit={submitComment}>
            <input
              type="text"
              className="Post-comment"
              value={comm}
              onChange={changeComment}
              placeholder="share your thoughts..."
            />
            <button className="Post-comment-done-btn">Done</button>
          </form>
          {comments.length !== 0 ? (
            comments.map((item, key) => (
              <div key={item.commId} className="Post-comment-section2">
                <span>
                  <span style={{ fontWeight: "bold" }}>YOU:</span>{" "}
                  {item.commVal} &nbsp;&nbsp;
                  <img
                    src={deletecomm}
                    alt=""
                    className="Post-delete-comm"
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
    </>
  );
};

export default Posts;
