import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import ConfirmAcc from "../components/ConfirnAcc";
import RegistrationDetails from "../components/RegistrationDetails";
import { ImCross } from "react-icons/im";

const SignupPage = (props) => {
  const [user, setUser] = useState("");
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [acc, setAcc] = useState("");

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        setAcc(res.data.name);
        setOpen(true);
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (!props.show) {
    return null;
  }

  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass1 = (e) => {
    setPass1(e.target.value);
  };
  const changePass2 = (e) => {
    setPass2(e.target.value);
  };

  const submitForm2 = (e) => {
    if (
      user === "" ||
      fullname === "" ||
      email === "" ||
      pass1 === "" ||
      pass2 === ""
    ) {
      alert("Please fill all the fields.");
      e.preventDefault();
    } else if (pass1 !== pass2) {
      alert("Passwords do not match.");
      e.preventDefault();
    } else {
      e.preventDefault();
      setUser("");
      setPass1("");
      setPass2("");
      setName("");
      setEmail("");
      props.onClose();
    }
  };
  const view = () => {
    setOpen2(true);
  };
  const setData = (user2, pass01) => {
    console.log(user2);
    console.log(pass01);
    console.log(acc);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-full max-w-lg relative">
          <div className="bg-white rounded-lg mx-6 overflow-hidden shadow-lg p-8">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800">
                Join <span className="text-orange-500">adda</span>Gram
              </h1>
              <h2 className="text-lg text-gray-600">in few quick steps...</h2>
            </div>
            <div className="absolute top-10 right-4 w-10 h-10 cursor-pointer">
              <ImCross onClick={props.onClose} />
            </div>
            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="username"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={user}
                onChange={changeUser}
              />
              <input
                type="text"
                placeholder="full name"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={fullname}
                onChange={changeName}
              />
              <input
                type="email"
                placeholder="email id"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={email}
                onChange={changeEmail}
              />
              <input
                type="password"
                placeholder="create password"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={pass1}
                onChange={changePass1}
              />
              <input
                type="password"
                placeholder="confirm password"
                className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={pass2}
                onChange={changePass2}
              />
              <button
                className="block w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
                onClick={submitForm2}
              >
                Register
              </button>
              <h5
                className="text-center text-gray-500 cursor-pointer"
                onClick={login}
              >
                Register with Google
              </h5>
            </div>
          </div>
        </div>
      </div>
      <ConfirmAcc
        open={open}
        name={acc}
        onClose={() => {
          setOpen(false);
        }}
        open2={view}
      />
      <RegistrationDetails
        open={open2}
        onClose={() => {
          setOpen2(false);
        }}
        setData={setData}
      />
    </>
  );
};

export default SignupPage;
