import React, { useEffect, useState } from 'react';
import './Progress.css'; // Import your CSS file

const LinearDeterminate = () => {
    const [val, setVal] = useState("translateX(0px");
    useEffect(() => {
        setVal('translateX(100%)');
    }, [])

    // const progress = () => {
    //     if(val === 10){
    //         clearInterval(interval);
    //         console.log(val);
    //     }
    //     else{
    //         setVal(val + 1);
    //         console.log(val);
    //     }
    // }
    // const interval = setInterval(progress, 1000);
    
  return (
    // <progress className="custom-progress" value={val} max={10}></progress>
    <>
        <div style={{height: "5px", width: '100%', backgroundColor: 'grey', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', width: '100%', backgroundColor: 'rgb(254, 163, 82)', height: '100%', marginLeft: '-100%', transform: val, transitionDuration: '10s'}}></div>
        </div>
    </>
  );
};

export default LinearDeterminate;
