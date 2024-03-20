import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from "emoji-picker-react";
import send from "../pictures/send.png";
import smiley from "../pictures/smiley.png";

export default function Example(props) {
  const [open, setOpen] = useState(false);
  const [picker, setPicker] = useState(false);
  const [val, setVal] = useState("");
  const [message, setMessage] = useState([]);
  const [modebg, setModebg] = useState("white");
  const [modetext, setModetext] = useState("black");
  // const [modeTrigger, setModeTrigger] = useState(0);

  useEffect(() => {
    setOpen(props.display);
    // setModeTrigger(1);
    if (props.mode) {
      //dark mode
      setModebg("rgb(26, 24, 48)");
      setModetext("white");
    } else {
      //light mode
      setModetext("black");
      setModebg("white");
    }
    // props.handleCB(open);
  }, [props.display, props.mode]);

  const openPicker = () => {
    if (picker === false) {
      setPicker(true);
    } else {
      setPicker(false);
    }
    // setPicker(true);
  };
  const changeVal = (e) => {
    setVal(e.target.value);
    setPicker(false);
  };
  const addEmoji = (e) => {
    setVal(val + e.emoji);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage([...message, val]);
    setVal("");
    setPicker(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
                        className="text-base text-xl font-semibold leading-6"
                        style={{ color: modetext }}
                      >
                        {props.name}
                      </Dialog.Title>
                    </div>

                    <div
                      className="relative mt-6 flex-1 px-4 sm:px-6 overflow-y-scroll overflow-x-hidden bg-slate-400"
                      style={{ height: "400px", overflow: "scroll" }}
                    >
                      {/* Set a fixed maximum height for the container */}
                      <div className="absolute bottom-0 right-4 grid justify-items-end">
                        {message.length !== 0 ? (
                          message.map((item, key) => (
                            <div
                              key={key}
                              className="mb-2 rounded-l-xl rounded-tr-xl w-fit max-w-72 px-2 py-2"
                              style={{
                                wordWrap: "break-word",
                                backgroundColor: modebg,
                                color: modetext,
                              }}
                            >
                              <p>{item}</p>
                            </div>
                          ))
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>

                    <div className=" px-4 sm:px-6">
                      <form onSubmit={sendMessage}>
                        <label class="relative block mt-4 flex">
                          <span className="absolute bottom-[120%] right-0">
                            <EmojiPicker
                              height={380}
                              width={300}
                              open={picker}
                              onEmojiClick={addEmoji}
                            />
                          </span>
                          <input
                            class="placeholder:italic placeholder:text-gray-500 text-wrap block bg-gray-300 w-9/12 border border-slate-300 rounded-md py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="write a message..."
                            type="text"
                            name="search"
                            value={val}
                            onChange={changeVal}
                          />
                          <span className="mx-2 my-2 cursor-pointer">
                            <img
                              src={smiley}
                              alt=""
                              onClick={openPicker}
                              style={{ width: "30px" }}
                            />
                            {/* <SendIcon onClick={openPicker}/> */}
                            {console.log(picker)}
                          </span>
                          <span className="mx-2 mt-2 cursor-pointer">
                            {/* <SendIcon  /> */}
                            <img
                              src={send}
                              style={{ width: "30px" }}
                              alt=""
                              // onClick={sendMessage}
                            />
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
