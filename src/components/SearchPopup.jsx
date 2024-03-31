// import { Fragment, useRef } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// // import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
// import SearchResults from './SearchResults'

// export default function Example(props) {
//   // const [open, setOpen] = useState(true)

//   const cancelButtonRef = useRef(null)

//   return (
//     <Transition.Root show={props.open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-start sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform  rounded-lg bg-transparent text-center items-center transition-all sm:my-8 sm:w-full sm:max-w-lg">
                
//                     <SearchResults mode={props.mode} hide={props.onClose} />
                  
                
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }


// import * as React from "react";
// import PropTypes from "prop-types";
// // import Button from "@mui/material/Button";

// import Dialog from "@mui/material/Dialog";

// import Centertabs from "./Centertabs";
// import Followers from "./Followers";
// import Following from "./Following";
// import { FaSearch } from "react-icons/fa";
// import Follow from "./Follow";
// import SearchResults from "./SearchResults";

// const emails = ["username@gmail.com", "user02@gmail.com"];

// function SimpleDialog(props) {
//   const [val, setVal] = React.useState(1);
//   const changeTab = (data) => {
//     setVal(data);
//   };
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <div className="w-auto h-[300px] bg-inherit">
//        <SearchResults />
//       </div>
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

// export default function SearchPopup(props) {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="relative block lg:hidden rounded-full bg-orange-300 p-2 text-black-400  hover:bg-orange-500 focus:outline-none hover:transition duration-500 mx-2"
//         onClick={handleClickOpen}
//       >
//         <FaSearch className="h-6 w-6" aria-hidden="true" />
//       </button>
      
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//         mode={props.mode}
//       />
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaSearch } from "react-icons/fa";
import SearchResults from './SearchResults';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'rgb(0, 0, 0, 0)',
  border: 'none',
  boxShadow: 24,
};

export default function SearchPopup(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        type="button"
        className="relative block xl:hidden rounded-full bg-orange-300 p-2 text-black-400  hover:bg-orange-500 focus:outline-none hover:transition duration-500 mx-2"
        onClick={handleOpen}
      >
        <FaSearch className="h-6 w-6" aria-hidden="true" />
      </button>      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SearchResults mode={props.mode} />
        </Box>
      </Modal>
    </div>
  );
}
