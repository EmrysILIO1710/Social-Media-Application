import React from "react";
import AlignItemsList from "./AlignItemsList";
// import AlignItemsList from "./AlignItemsList";

export default function Trial() {
  const data =  [
    {
      id: 1,
      name: "john Dichhie",
    },
    {
      id: 2,
      name: "Soumi Chakraborty",
    },
    { id: 3, name: "Spandan Bera" },
    {
      id: 4,
      name: "Arka Sarkar",
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
