import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import EmojiPicker from "emoji-picker-react";
import smiley from "../pictures/smiley.png";
import { IoIosSend } from "react-icons/io";
import chatBG from "../pictures/ChatBackground.jpg";

export default function Example(props) {
  const [open, setOpen] = useState(false);
  const [picker, setPicker] = useState(false);
  // const [val, setVal] = useState("");
  // const [message, setMessage] = useState([]);
  const [modebg, setModebg] = useState("white");
  const [modetext, setModetext] = useState("black");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setOpen(props.display);
    if (props.mode) {
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      setModetext("black");
      setModebg("white");
    }
  }, [props.display, props.mode]);

  const openPicker = () => {
    setPicker(!picker);
  };

  const addEmoji = (e) => {
    setInputValue(inputValue + e.emoji);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages((prevMessages) => [inputValue, ...prevMessages]);
    setInputValue("");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={() => {
          setOpen(false);
          props.handleCB();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative right-[350px] rounded-md text-gray-300 hover:text-white focus:outline-none "
                        onClick={() => {
                          setOpen(false);
                          props.handleCB();
                        }}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div
                    className="absolute right-[350px] w-full flex h-full flex-col py-6 shadow-xl"
                    style={{ backgroundColor: modebg }}
                  >
                    <div className="px-4 sm:px-6">
                      <Dialog.Title
                        className="text-base font-semibold leading-6"
                        style={{ color: modetext }}
                      >
                        {props.name}
                      </Dialog.Title>
                    </div>

                    <div
                      className="relative mt-6 flex-1 px-4 sm:px-6 bg-transparent overflow-y-scroll overflow-x-hidden"
                      style={{
                        height: "400px",
                        overflow: "scroll",
                        backgroundImage: `url(${chatBG})`,
                      }}
                    >
                      <div className="flex flex-col-reverse float-right h-full overflow-y-auto">
                        {messages.map((message, index) => (
                          <div key={index} className="mb-2">
                            <div className="bg-orange-300 text-white rounded-lg p-2 max-w-xs">
                              {message}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=" px-4 sm:px-6">
                      <form onSubmit={handleSubmit}>
                        <label className="relative mt-4 flex">
                          <span className="absolute bottom-[120%] right-0">
                            <EmojiPicker
                              height={380}
                              width={300}
                              open={picker}
                              onEmojiClick={addEmoji}
                            />
                          </span>
                          <input
                            className="placeholder:italic placeholder:text-gray-500 text-wrap block bg-gray-300 w-9/12 border border-slate-300 rounded-md py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="write a message..."
                            type="text"
                            name="search"
                            value={inputValue}
                            onChange={handleInputChange}
                          />
                          <span className="mx-2 my-2 cursor-pointer">
                            <img
                              src={smiley}
                              alt=""
                              onClick={openPicker}
                              style={{ width: "30px" }}
                            />
                          </span>
                          <span className="mx-2 mt-2 cursor-pointer">
                            <button
                              type="submit"
                              className="bg-orange-400 text-white rounded-full px-3 py-2 ml-2"
                            >
                              <IoIosSend size={20} />
                            </button>
                          </span>
                        </label>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
