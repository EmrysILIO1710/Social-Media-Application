import React, { useEffect, useState } from 'react';
import './Progress.css'; // Import your CSS file

const LinearDeterminate = () => {
    const [val, setVal] = useState("translateX(0px");

    useEffect(() => {
        setVal('translateX(100%)');
    }, []);

  return (
    <>
        <div className='h-1 w-full relative overflow-hidden bg-white'>
            <div className='absolute w-full bg-[#FEA352] h-full ml-["-100%"] duration-[10s]' style={{transform: val}}></div>
        </div>
    </>
  );
};

export default LinearDeterminate;
