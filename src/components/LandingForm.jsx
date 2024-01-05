import React, { useState } from "react";
import './LandingForm.css';
import eye1 from '../pictures/visible.png';
import { Link, useNavigate } from "react-router-dom";
import eye2 from '../pictures/hide.png';

const LandingForm = () => {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [icon, setIcon] = useState(eye1);
    const [val, setVal] = useState("password");
    const navigate = useNavigate();

    const changeId = (e)=> {
        setId(e.target.value);
    }
    const changePass = (e)=> {
        setPass(e.target.value);
    }
    const submitForm = (e)=> {
        if(id === "" || pass === "")
        {
            alert("Please check user id or password.");
            e.preventDefault();
        }
        else
        {
            e.preventDefault();
            setId("");
            setPass("");
            navigate("/signup");
        }
    }
    const display = ()=> {
        if(val === "password")
        {
            setIcon(eye2);
            setVal("text");
        }
        else
        {
            setIcon(eye1);
            setVal("password");
        }
    }
    

    return(
        <div className="LF-container">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="user id or email" className="LF-input" value={id} onChange={changeId} />
                <br />
                <input type={val} placeholder="password" className="LF-input" value={pass} onChange={changePass} /> 
                <img src={icon} alt="show hide button" className="LF-show-hide-btn" onClick={display} />
                <br />
                <button className="LF-login">Log in</button>
                <br />
                <h3 className="LF-h3">Don't have an account? <Link to='/signup' target="blank" className="LF-signup">Sign Up.</Link></h3>
            </form>
        </div>
    );
};

export default LandingForm;