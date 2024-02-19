import { Fragment } from "react";
import "./NotificationArea.css";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon
} from "@heroicons/react/20/solid";

import FollowRequest from "./FollowRequest";
import NotificationList from "./NotificationList";



export default function NotificationArea() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 NA-btn">
        <span>Notifications</span>
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-4 flex w-screen max-w-max -translate-x-1/2 px-4 
          xl:-translate-x-1/4 
          lg:-translate-x-1/4  
          md:-translate-x-1/2 
          sm:-translate-x-1/2 
        ">
          <div className="w-auto max-w- flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2 NA-box">
              <div className="NA-box-div1">
                <h4 class="mt-10 NA-span">Follow Requests</h4>
                <br />
                <FollowRequest />
              </div>
              {/* <hr style={{width: "800px", transform: "rotate(90deg)"}} /> */}
              <div className="NA-box-div2">
                <h4 class="mt-10 NA-span">Notifications</h4>
                <br />
                <NotificationList />
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
