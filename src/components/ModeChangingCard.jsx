import React from "react";
import {Link} from "react-router-dom";

export default function MediaCard(props) {
  return (
    <div className="card w-72">
      <img src={props.Image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.Heading}</h5>
        <p className="card-text">
          {props.Description}
        </p>
        <Link to="/" className="block bg-orange-200 hover:bg-orange-300 text-black rounded-md py-2 px-4 w-full text-center transition duration-300 ease-in-out no-underline">
          {props.ButtonText}
        </Link>
      </div>
    </div>
  );
}
