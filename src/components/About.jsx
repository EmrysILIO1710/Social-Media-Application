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
            <div className="About-page text-wrap text-base
                md:text-lg
                xl:max-w-lg xl:text-xl
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
