import React, { useState } from "react";
import "./LandingForm.css";
import eye1 from "../pictures/visible.png";
import { useNavigate } from "react-router-dom";
import eye2 from "../pictures/hide.png";
import SignupPage from "../pages/SignupPage";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import SignUpPageResponsive from "./SignUpPageResponsive";

const LandingForm = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [icon, setIcon] = useState(eye1);
  const [val, setVal] = useState("password");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const changeId = (e) => {
    setId(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const submitForm = (e) => {
    if (id === "" || pass === "") {
      alert("Please check user id or password.");
      e.preventDefault();
    } else {
      e.preventDefault();
      setId("");
      setPass("");
      navigate("/feed");
    }
  };
  const display = () => {
    if (val === "password") {
      setIcon(eye2);
      setVal("text");
    } else {
      setIcon(eye1);
      setVal("password");
    }
  };
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
        console.log(res);
        navigate("/feed");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <h1 className="italic text-center mt-16 LF-H1">
        Welcome To <span style={{ color: "rgb(254, 163, 82)" }}>adda</span>Gram
      </h1>

      <div className="LF-container">
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="user id or email"
            className="LF-input"
            value={id}
            onChange={changeId}
          />
          <br />
          <input
            type={val}
            placeholder="password"
            className="LF-input"
            value={pass}
            onChange={changePass}
          />
          <img
            src={icon}
            alt="show hide button"
            className="LF-show-hide-btn"
            onClick={display}
          />
          <br />
          <button className="LF-login">Log in</button>
          {/* <br /> */}
          {/* <GoogleLogin
                    onSuccess={credentialResponse => {
                        var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                        console.log(credentialResponseDecoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                /> */}
          {/* Rederect to google */}
          <button
            style={{ margin: "0px 112px", fontSize: "18px" }}
            onClick={() => login()}
          >
            Continue with Google
          </button>
          <br />
          <h3 className="LF-h3">
            Don't have an account?{" "}
            <span className="LF-signup" onClick={() => setShow(true)}>
              Sign Up.
            </span>
          </h3>
        </form>
      </div>
      <div className="sm:block md:block lg:hidden xl:hidden">
        <SignUpPageResponsive onClose={() => setShow(false)} show={show} />
      </div>
      <div className="hidden sm:block">
        <SignupPage onClose={() => setShow(false)} show={show} />
      </div>
    </>
  );
};

export default LandingForm;
