import React, { useState } from "react";
import "./Navbar.css";
import Navy from "../pictures/conv.png";
import Navy2 from '../pictures/message2.png';
import NS from "../pictures/search.png";
import NB from "../pictures/notification.png";
import NB2 from '../pictures/notification2.png';
import NU from "../pictures/user.png"; 
import NU2 from '../pictures/user2.png';

const Navbar = () => {
  const [user, setUser] = useState(NU);
  const [noti, setNoti] = useState(NB);
  const [msg, setMsg] = useState(Navy);
  const [colorUser, setColorUser] = useState("white");
  const [colorNoti, setColorNoti] = useState("white");
  const [colorMsg, setColorMsg] = useState("white");

  
  const changeNoti = () => {
    if(colorNoti === "white"){
      setNoti(NB2);
      setColorNoti("rgb(254, 163, 82)");
      setMsg(Navy);
      setColorMsg("white");
      setUser(NU);
      setColorUser("white");
    }
    else{
      setNoti(NB);
      setColorNoti("white");
    }
  }
  const changeMsg = () => {
    if(colorMsg === "white"){
      setMsg(Navy2);
      setColorMsg("rgb(254, 163, 82)");
      setNoti(NB);
      setColorNoti("white");
      setUser(NU);
      setColorUser("white");
    }
    else{
      setMsg(Navy);
      setColorMsg("white");
    }
  }
  const changeUser = () => {
    if(colorUser === "white"){
      setUser(NU2);
      setColorUser("rgb(254, 163, 82)");
      setMsg(Navy);
      setColorMsg("white");
      setNoti(NB);
      setColorNoti("white");
    }
    else{
      setUser(NU);
      setColorUser("white");
    }
  }

  return (
    <>  
      <div className="navbar-rect">
        <div className="navbar-logo">
          <h1><span style={{color: "rgb(254,163,82)"}}>adda</span>Gram</h1>
        </div>
        <div className="navbar-search">
          <form >
            <input className="navbar-searchbar" type="text" name="" id="" placeholder="Search addaGram"/>
            
          </form>
          <img className="navbar-searchicon" src={NS} alt="" />  
        </div>
        <div className="navbar-icons">
          <div style={{backgroundColor: colorNoti}} className="navbar-iconbox">
            <img className="navbar-noti" src={noti} alt="" onClick={changeNoti} />
          </div>
          <div style={{backgroundColor: colorMsg}} className="navbar-iconbox">
            <img className="navbar-msg" src={msg} alt="" onClick={changeMsg} />
          </div>
          <div style={{backgroundColor: colorUser}} className="navbar-iconbox">
            <img className="navbar-user" src={user} alt="" onClick={changeUser} />
          </div>
        </div>
    
      </div>
    
    
    
    </>
    
      
    
  );
}
export default Navbar;