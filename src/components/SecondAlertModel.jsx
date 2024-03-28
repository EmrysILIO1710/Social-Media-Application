import React from "react";

const SecondAlertModel = ({ handleClose }) => {
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
        <div className="bg-black bg-opacity-50 inset-0 absolute"></div>
        <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full mx-4">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-medium text-gray-900">
                Remainder for Profile Completion
              </h3>
              <p className="text-sm text-gray-500">
                Complete your profile settings to get the full experience of
                AddaGram.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-300 text-base font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-300 ease-in-out"
              onClick={handleClose}
            >
              I changed my Profile
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-300 ease-in-out"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondAlertModel;