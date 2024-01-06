// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import LandingForm from './components/LandingForm';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <BrowserRouter>
      <LandingPage />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
