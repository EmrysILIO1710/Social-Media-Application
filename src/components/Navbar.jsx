import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { IoIosSearch } from "react-icons/io";
// import { AiFillHome } from "react-icons/ai";
import AddagramLogo from "../pictures/AddagramLogo.png";
import AddagramLogo2 from "../pictures/logo2.png";
// import { BiSolidMoviePlay } from "react-icons/bi";
// import { BiSolidMessage } from "react-icons/bi";
// import { TbWorldUpload } from "react-icons/tb";
// import { MdGroups2 } from "react-icons/md";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NotificationArea from "./NotificationArea";
import Messages from "./Messages";
// import SearchResults from "./SearchResults";
// import SearchResults2 from "./SearchResults2";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults";

const navigation = [
  // { name: <AiFillHome size={32} />, href: "/feed", current: false },
  // { name: <BiSolidMoviePlay size={32} />, href: "/", current: false },
  // { name: <MdGroups2 size={32} />, href: "/", current: false },
];
const mobileNavHamBurgurOption = [
  { name: "Home", href: "/feed", current: false },
  { name: "Reels", href: "/", current: false },
  { name: "Group", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  const [dp, setDp] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const [modebg, setModebg] = useState("white");
  // const [modetext, setModetext] = useState("black");
  const [logo, setLogo] = useState(AddagramLogo);
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
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-orange-300 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-none items-center justify-center sm:items-stretch sm:justify-start">
                <Link to={'/feed'} className="flex flex-shrink-0 items-center">
                  <img
                    className="h-6 w-auto sm:h-11 sm:w-auto cursor-pointer hidden md:block"
                    src={logo}
                    alt="Your Company" 
                  />
                </Link>
                <div className="hidden sm:ml-6 md:block my-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-orange-400 text-white"
                            : "text-orange-500 hover:bg-orange-400 hover:text-white",
                          "rounded-md px-3 no-underline text-sm font-medium hover:transition duration-500"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 grid  place-content-center">
                <SearchResults mode={props.mode} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* <SearchResults /> */}
                <button
                  type="button"
                  className="relative rounded-full bg-orange-300 p-2 text-black-400  hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transition duration-500 mx-2"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  <NotificationArea mode={props.mode} />
                </button>

                {/* <button
                  type="button"
                  className="relative rounded-full bg-orange-300 p-2 text-black-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transition duration-500"
                > */}
                {/* <span className="sr-only">View notifications</span>
                  <BiSolidMessage className="h-6 w-6" /> */}
                {/* {console.log(props.mode)} */}
                <Messages mode={props.mode} />
                {/* </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-6">
                  <div>
                    <Link to={'/profilepage'} className="relative  flex flex-shrink-0 rounded-full p-2 text-sm focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-10 w-10 rounded-full" src={dp} alt="" />
                    </Link>
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden shadow-md">
            <div className="space-y-1 px-2 ">
              {mobileNavHamBurgurOption.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-orange-600 hover:bg-orange-400 hover:text-white",
                    "block rounded-md px-3 text-base font-medium hover:transition duration-500 no-underline text-left w-full py-2"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
