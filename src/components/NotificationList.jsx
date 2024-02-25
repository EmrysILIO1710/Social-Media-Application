import profileimg1 from "../pictures/notificationProfileImg-1.png";
import profileimg2 from "../pictures/notificationProfileImg-2.png";
import profileimg3 from "../pictures/notificationProfileImg-3.png";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import NotificationItem from "./NotificationItem";
// import './NotificationList.css';

const NotificationList = () => (
  <div class="relative">
    <div class="z-10 flex w-screen max-w-max ">
      <div class="w-screen max-w-md  flex-auto  rounded-3xl bg-white text-sm leading-6 px-4 ring-gray-900/5">
        <div>
          <NotificationItem
            imgSrc={profileimg1}
            title="Yesterday"
            description="krishuu5825, _rohit_rajak_45 and others liked your story. ld"
          />
          <NotificationItem
            imgSrc={profileimg2}
            title="This Week"
            description="_rohit_rajak_45 and sayani_0066 liked your story. 2d"
          />
          <NotificationItem
            imgSrc={profileimg3}
            title="This Month"
            description="sayani_0066 liked your comment: @joy.singharoy03 @9200payal @_rohit_rajak_45 @sayani_0066 @titly_chakraborty_prathama eee lw"
          />
          <NotificationItem
            imgSrc={profileimg2}
            title="This Week"
            description="_rohit_rajak_45 and sayani_0066 liked your story. 2d"
          />
          <NotificationItem
            imgSrc={profileimg3}
            title="This Month"
            description="sayani_0066 liked your comment: @joy.singharoy03 @9200payal @_rohit_rajak_45 @sayani_0066 @titly_chakraborty_prathama eee lw"
          />
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-orange-100">
            <a
              href="#"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 no-underline"
            >
              <IoIosArrowDown />
              View all
            </a>
            <a
              href="#"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 no-underline"
            >
              <IoVolumeMuteOutline />
              Mute Notifications
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotificationList;