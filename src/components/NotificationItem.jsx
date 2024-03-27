import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotificationItem = ({ imgSrc, title, description, mode }) => {
  const [modetext, setModetext] = useState("black");
  // const [modeTrigger, setModeTrigger] = useState(0);

  useEffect(() => {
    // setModeTrigger(1);
    if(mode){
      //dark mode
      setModetext("white");
    }
    else{
      //light mode
      setModetext("black");
    }
  }, [mode]);

  return (
    <div class="group relative flex gap-x-6 rounded-lg p-4  text-left transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div class="mt-7 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent group-hover:bg-white">
        <img class="rounded-full" src={imgSrc} alt="" />
      </div>
      <div>
        <Link to="/" class="font-semibold" style={{ color: modetext }}>
          {title}
          <span class="absolute inset-0"></span>
        </Link>
        <p class="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
