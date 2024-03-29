import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function LogoutPopup(props) {
  const [open, setOpen] = useState(false);
  const [modetext, setModetext] = useState("black");
  const [modebg, setModebg] = useState("white");


  useEffect(() => {
    if (props.mode) {
        //dark mode
        setModetext("white");
        setModebg("rgb(26, 24, 48)");
      } else {
        //light mode
        setModetext("black");
        setModebg("white");
      }
    setOpen(props.open);
  }, [props]);

  const navigate = useNavigate();


  const cancelButtonRef = useRef(null);

    const next = () => {
      props.onClose();
    }
    const logout = () => {
        navigate("/");
    }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={props.onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="text-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4" style={{backgroundColor: modebg, color: modetext}}>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6"
                  >
                      Are you sure you want to Logout?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6" style={{backgroundColor: modebg}}>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-400 ml-4 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md text-[#FEA352] bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={next}
                    ref={cancelButtonRef}
                  >
                    Resume Journey
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
