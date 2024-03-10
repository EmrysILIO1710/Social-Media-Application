import React, { useState } from "react";
import { HiPlusCircle, HiX } from "react-icons/hi";

const PhotoUploadPart = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload a photo
      </label>
      {image ? (
        <div className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>
      ) : (
        <div className="relative border-dashed border-2 border-gray-300 rounded-md p-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
          <div className="text-center">
            <HiPlusCircle className="mx-auto h-12 w-12 text-orange-300" />
            <p className="mt-1 text-sm text-gray-600">
              Drag and drop or click to upload
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUploadPart;