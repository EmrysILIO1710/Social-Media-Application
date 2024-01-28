import React from "react";
import "./Navbar.css";
import Navy from "../pictures/navmsg.png";
import NS from "../pictures/navsearch.png"
import NB from "../pictures/navnoti.png";
import NU from "../pictures/navbaruser.png";

const Navbar = () => {
  
  return (
    <>  
      <div className="navbar-rect">
        <div className="navbar-logo">
          <h1 style={{textShadow: "2px 2px 20px grey"}}><span style={{color: "rgb(254,163,82)"}}>adda</span>Gram</h1>
        </div>
        <div className="navbar-search">
          <form >
            <input className="navbar-searchbar" type="text" name="" id="" placeholder="Search addaGram"/>
            
          </form>
          <img className="navbar-searchicon" src={NS} alt="" />  
        </div>
        <div className="navbar-icons">
          <img className="navbar-noti" src={NB} alt="" />
          <img className="navbar-msg" src={Navy} alt="" />
          <img className="navbar-user" src={NU} alt="" />
          

        </div>
    
      </div>
    
    
    
    </>
    
      
    
  );
}
export default Navbar;