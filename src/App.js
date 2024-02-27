// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './components/CustomScrollbar.css';

// import LandingForm from './components/LandingForm';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Posts from './components/Posts';
import Story from './components/Story';
import Navbar from './components/Navbar';
import Trial from './components/Trial';
import PostArea from './components/PostArea';
import Profcov from './components/Profcov';
import Username from './components/Username';
import About from './components/About';

import EditProfBtn from './components/EditProfBtn';
import EditProfpage from './pages/EditProfPage';
import Userimage from './components/Userimage';
import { useEffect, useState } from 'react';
import StoryArea from './components/StoryArea';
import StoryContent from './components/StoryContent';
import FeedPage from './pages/FeedPage';
import MediaSection from './components/MediaSection';
import Follow from './components/Follow';
import FollowRequest from './components/FollowRequest';
import NotificationList from './components/NotificationList';
import NotificationArea from './components/NotificationArea';
// <<<<<<< HEAD
import PostButton from './components/PostButton';
// =======
import ProfilePage from './pages/ProfilePage';

// >>>>>>> f3bfd539fc6fc01386f312450b776693353ca523

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = 'addaGram';
  }, []);

  const CB = (data) => {
    setShow(data);
  }
  return (
    <>
      <BrowserRouter>
        {
          show && <Navbar />
        }
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<LandingPage handleCB = {CB} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/story' element={<Story />}/>
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/trial' element={<Trial />} />
          <Route path='/postarea' element={<PostArea />} />
          <Route path='/profcov' element={<Profcov />} />
          <Route path='/username' element={<Username />} />
          <Route path='/about' element={<About />} />
          <Route path='/editprofbtn' element={<EditProfBtn />} />
          <Route path='/editprofpage' element={<EditProfpage />} />
          <Route path='/userimage' element={<Userimage />} />
          <Route path='/storyarea' element={<StoryArea />} />
          <Route path='/storyc' element={<StoryContent />} />
          <Route path='/feed' element={<FeedPage handleCB = {CB} />} />
          <Route path='/media' element={<MediaSection />} />
          <Route path='/follow' element={<Follow />} />
          <Route path='/followreq' element={<FollowRequest />} />
          <Route path='/notifications' element={<NotificationList/>}/>
          <Route path='/notificationarea' element={<NotificationArea />} />
          <Route path='/profilepage' element={<ProfilePage handleCB = {CB} />} />
        </Routes>
        <PostButton/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
