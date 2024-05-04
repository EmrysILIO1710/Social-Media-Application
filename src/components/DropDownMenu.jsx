import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaUserFriends } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaGlobe } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const optionsData = [
  { option: "Friends", icon: FaUserFriends },
  { option: "Public", icon: FaGlobe },
  { option: "Only Friends", icon: LiaUserFriendsSolid },
  { option: "Friends without...", icon: TbFriendsOff },
  { option: "Private", icon: RiGitRepositoryPrivateLine },
  { option: "Specific Friends", icon: IoPersonOutline }
];

export default function Example(props) {
  const [selectedOption, setSelectedOption] = useState("Friends");
  const [modebg, setModebg] = useState("white");
  const [modetext, setModetext] = useState("black");

  useEffect(() => {
    if (props.mode) {
      //dark mode
      setModetext("white");
      setModebg("rgb(15, 12, 39)");
    } else {
      //light mode
      setModetext("black");
      setModebg("white");
    }
  }, [props.mode]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Calculate the maximum option width
  const optionWidth = Math.max(...optionsData.map(({ option }) => option.length));

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          style={{ backgroundColor: modebg, color: modetext }}
        >
          {optionsData.find(({ option }) => option === selectedOption)?.icon({ className: 'mr-2 my-1' })}
          {selectedOption}
          <ChevronDownIcon className="-mr-1 h-5 w-5 " style={{ color: modetext }} aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-180"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ width: `${optionWidth}rem`, right: `calc(100% - ${optionWidth}rem)`, backgroundColor: modebg, color: modetext }}
          className="absolute z-10 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {optionsData.map(({ option, icon: Icon }) => (
            <Menu.Item key={option}>
              {({ active }) => (
                <button
                  onClick={() => handleOptionSelect(option)}
                  className={classNames(
                    active ? 'right-0 bg-gray-100 text-gray-900' : '',
                    'w-full px-4 py-2 text-sm no-underline flex'
                  )}
                >
                  <Icon size={16} className='mr-2 my-1'/>
                  {option}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}