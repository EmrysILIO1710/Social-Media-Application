import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function RegistrationDetails(props) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  useEffect(() => {
    setOpen(props.open);
  }, [props]);

  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changePass1 = (e) => {
    setPass1(e.target.value);
  };
  const changePass2 = (e) => {
    setPass2(e.target.value);
  };

  const submitForm = (e) => {
    if (pass1 !== pass2) {
      alert("Passwords do not match.");
      e.preventDefault();
    } else {
      e.preventDefault();
      //sending data back to signup page
      props.setData(user, pass1);
      setUser("");
      setPass1("");
      setPass2("");
      props.onClose();
    }
  };
  const cancelButtonRef = useRef(null);

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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                <div className="bg-white text-center px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Personal Details
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={submitForm}>
                      <div>
                        <div className="mt-2">
                          <input
                            id="text"
                            name="text"
                            type="text"
                            autoComplete="text"
                            required
                            placeholder="username"
                            value={user}
                            onChange={changeUser}
                            className="block w-full rounded-md border-2 border-[#FEA352] px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FEA352] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="password"
                            value={pass1}
                            onChange={changePass1}
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-2 border-[#FEA352] px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FEA352] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="confirm password"
                            value={pass2}
                            onChange={changePass2}
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-2 border-[#FEA352] px-2 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FEA352] sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-[#FEA352] shadow-sm hover:bg-[#FEA352] hover:text-white"
                        >
                          Save Details and Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-400 ml-4 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                    onClick={props.onClose}
                  >
                    Cancel
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
