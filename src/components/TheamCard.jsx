import React from "react";

const TheamCard = ({ title, imgSrc, cardText }) => (
  <div className="max-w-xs mt-20 mx-2">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={imgSrc}
          className="object-cover object-center w-full h-full"
          alt="Card"
        />
      </div>
      <div className="p-3">
        <h5 className="text-lg font-semibold mb-1">{title}</h5>
        <p className="text-sm text-gray-700">{cardText}</p>
      </div>
      <div className="p-3 bg-gray-100 hover:cursor-pointer">
        <small className="text-gray-500">Select This Theme</small>
      </div>
    </div>
  </div>
);

export default TheamCard;