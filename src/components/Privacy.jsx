import React, { useEffect } from "react";

const Privacy = (props) => {
  useEffect(() => {
    props.handleSB(true);
  });
  useEffect(() => {
    props.handleCB(true);
  });

  const options = [
    {
      id: "listGroupRadioGrid1",
      label: "Public Profile",
      text: "Every addaGram user can see your profile",
    },
    {
      id: "listGroupRadioGrid2",
      label: "Only Friends",
      text: "Only your friends can see your profile",
    },
    {
      id: "listGroupRadioGrid3",
      label: "Private Profile",
      text: "No one can see your profile",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center mt-16 ">
        <div className="list-group d-grid gap-2 border-0 ">
          {options.map((option) => (
            <div key={option.id} className="position-relative rounded-md ">
              <label
                className="list-group-item py-3 pe-5 hover:bg-orange-200 hover:cursor-pointer flex items-center justify-between"
                htmlFor={option.id}
              >
                <div className="flex-grow">
                  <strong className="fw-semibold">{option.label}</strong>
                  <span className="d-block small opacity-75">
                    {option.text}
                  </span>
                </div>
                <input
                  className="form-check-input fs-5 "
                  type="radio"
                  name="listGroupRadioGrid"
                  id={option.id}
                  value=""
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Privacy;
