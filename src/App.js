// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import './components/CustomScrollbar.css';

// import LandingForm from './components/LandingForm';
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import Posts from "./components/Posts";
import Story from "./components/Story";
import Navbar from "./components/Navbar";
import Trial from "./components/Trial";
import PostArea from "./components/PostArea";
import Profcov from "./components/Profcov";
import Username from "./components/Username";
import About from "./components/About";
import Followerfollowing from "./components/Followerfollowing";
import Followers from "./components/Followers";

// import EditProfBtn from './components/EditProfBtn';
import EditProfpage from "./pages/EditProfPage";
import Userimage from "./components/Userimage";
import { useEffect, useState } from "react";
import StoryArea from "./components/StoryArea";
import StoryContent from "./components/StoryContent";
import FeedPage from "./pages/FeedPage";
import MediaSection from "./components/MediaSection";
import Follow from "./components/Follow";
import FollowRequest from "./components/FollowRequest";
import NotificationList from "./components/NotificationList";
import NotificationArea from "./components/NotificationArea";

// import PostButton from './components/PostButton';
// =======
import ProfilePage from "./pages/ProfilePage";
import UserProfilePage from "./pages/UserProfilePage";
import FollowUnfollowButton from "./components/FollowUnfollowButton";
import Example from "./components/Example";
import ConfirmAcc from "./components/ConfirnAcc";
import Mutuals from "./pages/Mutuals";
import LinearDeterminate from "./components/LinearDeterminate";
import SettingPage from "./pages/SettingPage";
import VideosPage from "./pages/VideosPage";
import Privacy from "./components/Privacy";
import SettingsLeftSidebar from "./components/SettingsLeftSidebar";
import DarkModeSettings from "./components/DarkModeSettings";
import TheamsSettings from "./components/TheamsSettings";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import BottomSearch from "./components/BottomSearch";
import BottomChat from "./components/BottomChat";
//testing
function App() {
  const [show, setShow] = useState(false);
  const [dp, setDp] = useState("");
  const [modeTrigger, setModeTrigger] = useState(0);
  const [icon, setIcon] = useState(true); //to change between profile icon and settings icon
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    document.title = "addaGram";
    setModeTrigger(0);
  }, []);

  const CB = (data) => {
    setShow(data);
    setIcon(true);
  };
  const CB2 = (data, dataDp) => {
    setShow(data);
    setDp(dataDp);
    setIcon(false);
  };
  const SB = (data) => {
    setSidebar(data);
  };
  return (
    <>
      <BrowserRouter>
        {show && <Navbar dp={dp} mode={modeTrigger} icon={icon} />}
        {sidebar && <SettingsLeftSidebar handleCB={CB} mode={modeTrigger} />}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage handleCB={CB} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/story" element={<Story mode={modeTrigger} />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/postarea" element={<PostArea />} />
          <Route path="/profcov" element={<Profcov />} />
          <Route path="/username" element={<Username />} />
          <Route path="/about" element={<About />} />
          <Route path="/followerfollowing" element={<Followerfollowing />} />
          <Route path="/followers" element={<Followers />} />

          <Route path="/fubtn" element={<FollowUnfollowButton />} />
          <Route path="/editprofpage" element={<EditProfpage />} />
          <Route path="/userimage" element={<Userimage />} />
          <Route path="/storyarea" element={<StoryArea />} />
          <Route path="/storyc" element={<StoryContent />} />
          <Route
            path="/feed"
            element={
              <FeedPage handleCB={CB} mode={modeTrigger} handleSB={SB} />
            }
          />
          <Route path="/media" element={<MediaSection />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/followreq" element={<FollowRequest />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/notificationarea" element={<NotificationArea />} />
          <Route
            path="/profilepage"
            element={<ProfilePage handleCB={CB2} mode={modeTrigger} />}
          />
          <Route
            path="/userprofile"
            element={<UserProfilePage handleCB={CB} mode={modeTrigger} />}
          />
          <Route path="/example" element={<Example />} />
          <Route path="/confirm" element={<ConfirmAcc />} />
          <Route
            path="/mutuals"
            element={<Mutuals handleCB={CB} mode={modeTrigger} />}
          />
          <Route
            path="/videos"
            element={<VideosPage handleCB={CB} mode={modeTrigger} />}
          />
          <Route path="/progress" element={<LinearDeterminate />} />
          <Route
            path="/setting"
            element={<SettingPage handleCB={CB} mode={modeTrigger} />}
          />
          {/*Settings Options */}
          <Route
            path="/privacy"
            element={<Privacy handleCB={CB} mode={modeTrigger} />}
          />
          <Route
            path="/darkmode"
            element={<DarkModeSettings handleCB={CB} mode={modeTrigger} />}
          />
          <Route
            path="/theams"
            element={<TheamsSettings handleCB={CB} mode={modeTrigger} />}
          />
          <Route
            path="/search"
            element={<BottomSearch handleCB={CB} mode={modeTrigger} />}
          />
          <Route
          path="/chat"
          element={<BottomChat handleCB={CB} mode={modeTrigger} />}/>
        </Routes>
        {/* <PostButton/> */}
        <LabelBottomNavigation mode={modeTrigger} />
      </BrowserRouter>
    </>
  );
}

export default App;
