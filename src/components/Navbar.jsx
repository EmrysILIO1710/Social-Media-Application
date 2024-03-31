import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import AddagramLogo from "../pictures/AddagramLogo.png";
import AddagramLogo2 from "../pictures/logo2.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NotificationArea from "./NotificationArea";
import Messages from "./Messages";
import SearchResults from "./SearchResults";
import { IoMdSettings } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
import SearchPopup from "./SearchPopup";
// import SearchResults from "./SearchResults";


export default function Navbar(props) {
  const [dp, setDp] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const [modebg, setModebg] = useState("white");
  // const [modetext, setModetext] = useState("black");
  const [logo, setLogo] = useState(AddagramLogo);
  // const [show, setShow] = useState(false);
  // const [disp, setDisp] = useState(false);

  // const [modeTrigger, setModeTrigger] = useState(0);

  useEffect(() => {
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModebg("rgb(15, 12, 39)");
      // setModetext("white");
      setLogo(AddagramLogo2);
    } else {
      //light mode
      setModebg("white");
      // setModetext("black");
      setLogo(AddagramLogo);
    }
    if (props.dp !== "") {
      setDp(props.dp);
    }
  }, [props.dp, props.mode]);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-10 Bottom-Shadow"
      style={{ backgroundColor: modebg }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-1 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="flex flex-none items-center justify-center sm:items-stretch sm:justify-start">
                <Link to={'/feed'} className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto sm:h-12 sm:w-auto cursor-pointer md:block"
                    src={logo}
                    alt="Your Company" 
                  />
                </Link>
              </div>
              <div className="flex-1 px-44 xl:block hidden">
                <SearchResults mode={props.mode} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 static inset-auto ml-6 pr-0">
                {/* <button
                  type="button"
                  className="relative block lg:hidden rounded-full bg-orange-300 p-2 text-black-400  hover:bg-orange-500 focus:outline-none hover:transition duration-500 mx-2"
                > */}
                  {/* <FaSearch className="h-6 w-6" aria-hidden="true" />
                  <SearchPopup open={show} onClose={() => {setShow(false)}} mode={props.mode} /> */}
                  <SearchPopup mode={props.mode} />
                {/* </button> */}
                <button
                  type="button"
                  className="relative rounded-full bg-orange-300 p-2 text-black-400  hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transition duration-500 mx-2"
                >
                  <span className="sr-only">View notifications</span>
                  <NotificationArea mode={props.mode} />
                </button>
                <Messages mode={props.mode} />
                <Menu as="div" className="relative ml-6">
                  <div>
                    {
                      (props.icon) ? 
                        <Link to={'/profilepage'} className="relative  flex flex-shrink-0 rounded-full p-2 text-sm focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 ">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-10 w-10 rounded-full" src={dp} alt="" />
                        </Link> :
                        <button
                          type="button"
                          className="relative rounded-full bg-orange-300 p-2 hover:bg-orange-500 focus:outline-none hover:transition duration-500 items-center"
                        >
                          <IoMdSettings className="h-6 w-6" aria-hidden="true" />
                        </button>
                    }
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  );
}
