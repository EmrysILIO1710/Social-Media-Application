import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { IoIosSearch } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import AddagramLogo from "../pictures/AddagramLogo.png";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BiSolidMessage } from "react-icons/bi";
// import { TbWorldUpload } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import "./Navbar.css";

const navigation = [
  { name: <AiFillHome size={32} />, href: "#", current: false },
  { name: <BiSolidMoviePlay size={32} />, href: "#", current: false },
  { name: <MdGroups2 size={32} />, href: "#", current: false },
];
const mobileNavHamBurgurOption = [
  { name: "Home", href: "#", current: false },
  { name: "Reels", href: "#", current: false },
  { name: "Group", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed w-full z-10 Bottom-Shadow bg-white-300"
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-6 w-auto sm:h-11 sm:w-auto cursor-pointer hidden md:block"
                    src={AddagramLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 md:block my-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-orange-400 text-white"
                            : "text-orange-500 hover:bg-orange-400 hover:text-white",
                          "rounded-md px-3 no-underline text-sm font-medium hover:transition duration-500"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Search bar */}
                <div className="input-group mb-3 my-3 mx-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  {/* <button
                    className="btn btn-outline-secondary Bg-primary search-icon bg-gray-600 hover:bg-orange-500"
                    type="button"
                    id="button-addon2"
                  >
                    <IoIosSearch size={20} />
                  </button> */}
                </div>

                <button
                  type="button"
                  className="relative rounded-full bg-orange-300 p-2 text-black-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transition duration-500 mx-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="relative rounded-full bg-orange-300 p-2 text-black-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:transition duration-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BiSolidMessage className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-6">
                  <div>
                    <Menu.Button className="relative w-24 h-12 flex flex-shrink-0 rounded-full p-2 text-sm focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 ">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 text-sm text-gray-700 no-underline"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 text-sm text-gray-700 no-underline"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 text-sm text-gray-700 no-underline"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
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
