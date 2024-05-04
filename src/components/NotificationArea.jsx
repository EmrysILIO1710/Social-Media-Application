import { Fragment, useEffect, useState } from "react";
import "./NotificationArea.css";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon
} from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import FollowRequest from "./FollowRequest";
import NotificationList from "./NotificationList";



export default function NotificationArea (props) {
  const [modebg, setModebg] = useState("white");
  const [modetext, setModetext] = useState("black");
  // const [modeTrigger, setModeTrigger] = useState(0);

  useEffect(() => {
    // setModeTrigger(1);
    // console.log(props.mode);
    if(props.mode){
      //dark mode
      setModebg("rgb(15, 12, 39)");
      setModetext("white"); 
    }
    else{
      //light mode
      setModebg("white");
      setModetext("black");
    }
  }, [props.mode]);

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 NA-btn">
        <BellIcon className="h-6 w-6" aria-hidden="true" />
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="fixed  z-20 mt-4 flex w-screen max-w-max -translate-x-1/2 left-1/2 md:left-2/3  
          
        ">
          <div className="w-auto max-w- h-[85vh] overflow-scroll flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 NA-scroll"
            style={{backgroundColor: modebg}}
          >
            <div className="p-2 NA-box" style={{color: modetext}}>
              <div className="NA-box-div1">
                <h4 class="mt-10 NA-span">Follow Requests</h4>
                <br />
                <FollowRequest />
              </div>
              {/* <hr style={{width: "800px", transform: "rotate(90deg)"}} /> */}
              <div className="NA-box-div2">
                <h4 class="mt-10 hover:block NA-span">Notifications</h4>
                <br />
                <NotificationList mode={props.mode} />
              </div>
            </div>
            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
