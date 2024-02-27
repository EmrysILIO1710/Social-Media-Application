import React from "react";
import AlignItemsList from "./AlignItemsList";
export default function Trial() {
    const data =  [
      {
        id: 1,
        name: "hey_kanha.9",
      },
      {
        id: 2,
        name: "scodennnnn",
      },
      { id: 3, name: "lotusbotanical" },
      {
        id: 4,
        name: "schakraborty223",
      },
    ];
    return (
      <>
        {data.map((item) => (
          <AlignItemsList 
           textHeading={item.name}
           key={item.id}
          />
        ))}
      </>
    );
  }
  