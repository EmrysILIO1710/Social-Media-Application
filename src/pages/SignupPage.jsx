import React, { useState } from "react";
import './SignupPage.css';
import cross from '../pictures/close.png';
import friend from '../pictures/friends.jpg';

const SignupPage = (props)=> {
    const [user, setUser] = useState("");
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    if(!props.show)
    {
        return null
    } 

    const changeUser = (e)=> {
        setUser(e.target.value);
    }
    const changeName = (e)=> {
        setName(e.target.value);
    }
    const changeEmail = (e)=> {
        setEmail(e.target.value);
    }
    const changePass1 = (e)=> {
        setPass1(e.target.value);
    }
    const changePass2 = (e)=> {
        setPass2(e.target.value);
    }

    const submitForm2 = (e)=> {
        if(user === "" || fullname === "" || email === "" || pass1 === "" || pass2 === "")
        {
            alert("Please fill all the fields.");
            e.preventDefault();
            
        }
        else if(pass1 !== pass2)
            {
                alert("Passwords do not match.");
                e.preventDefault();
            }
        else
        {
            e.preventDefault();
            setUser("");
            setPass1("");
            setPass2("");
            setName("");
            setEmail("");
            props.onClose();
        }
    }

    return(
        <div className="SP-container" onClick={props.onClose}>
            <div className="SP-box" onClick={e => e.stopPropagation()}>
                <div className="SP-box-col1">
                    <img src={friend} alt="" className="SP-img" />
                </div>
                <div className="SP-box-col2">
                    <br />
                    <h1 className="SP-box-h1">Join <span style={{color: "rgb(254, 163, 82)"}}>adda</span>Gram</h1>
                    <h2 className="SP-box-h1">in few quick steps...</h2>
                    <form onSubmit={submitForm2}>
                        <img src={cross} alt="" className="SP-close" onClick={props.onClose} />
                        <input type="text" placeholder="username" className="SP-input" value={user} onChange={changeUser} /><br />
                        <input type="text" placeholder="full name" className="SP-input" value={fullname} onChange={changeName} /><br />
                        <input type="email" placeholder="email id" className="SP-input" value={email} onChange={changeEmail} /><br />
                        <input type="password" placeholder="create password" className="SP-input" value={pass1} onChange={changePass1} /><br />
                        <input type="password" placeholder="confirm password" className="SP-input" value={pass2} onChange={changePass2} /><br />
                        <button className="SP-modal-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;