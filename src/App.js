import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Mainsection from './Mainsection/Mainsection';
import SignUp from './Login/SignUp';
import PaymentPage from './Payment/PaymentPage';
import { useState } from 'react';
import MyTest from './MyTest';
import LoginPage from './Login/LoginPage';
import LandingPage from './LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import SeatBooking from './Seating/SeatBooking';
import IFrame from './Mainsection/IFrame';


function App() {

  return (
    <Routes>
      <Route path='/' exact element={ <LandingPage /> } />
      <Route path='/iframe' exact element={ <IFrame /> } />
      

      {/* <Route path='/' element={<SeatBooking />} /> */}
      {/* <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<LoginPage />} /> */}
      {/* <LoginPage /> */}
      

      {/* <PaymentPage /> */}
      {/* <Seating /> */}
      {/* <Route path='/test' element={<MyTest />} /> */}
    </Routes>
  );
}

export default App;
