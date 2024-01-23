// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import LandingForm from './components/LandingForm';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import Posts from './components/Posts';
import Trial from './components/Trial';
import PostArea from './components/PostArea';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/trial' element={<Trial />} />
          <Route path='/postarea' element={<PostArea />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
