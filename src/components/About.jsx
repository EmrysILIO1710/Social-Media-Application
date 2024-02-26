import React, { useEffect, useState } from "react";
import './About.css';
const About = (props) => {
    const [about, setAbout] = useState("An engineer. A full stack devoloper. From london. Wish me on 23 march. Troublemaker, go-getter. Ain't no thang like a chick'n wing mamacita... #foodlover #backend #fullstack");
    useEffect(() => {
        if(props.about !== ""){
            setAbout(props.about);
        }
    }, [props.about])
    return(
            <div className="About-page absolute text-wrap left-1/2 -translate-x-1/2 w-3/4 -bottom-20 text-base
                sm:-bottom-60
                md:-bottom-60 md:text-lg
                lg:-bottom-60 lg:text-lg
                xl:left-64 xl:top-3/4 xl:-translate-x-0 xl:max-w-lg xl:text-xl
            ">
                <p>
                    {about}
                </p>
                {/* An engineer.
                A full stack devoloper.
                From london.
                Wish me on 23 march. Troublemaker, go-getter. Ain't no thang like a chick'n wing mamacita... <br /><br />
                #foodlover 
                    #backend
                    #fullstack */}
            </div>
);
}
export default About;
