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
import Error from './Error/Error';
import SuccessMess from './Successfull/SuccessMess';
import Cards from './Mainsection/Cards';
import MainWithId from './Mainsection/MainWithId';
import ShowSearchResult from './Navbar/ShowSearchResult';


function App() {

  return (
    <Routes>
      <Route path='/' exact element={ <LandingPage /> } />
      <Route path='/payment' exact element={ <PaymentPage /> } />
      <Route path='/seating' exact element={ <SeatBooking /> } />
      
      <Route path='*' element={ <Error /> } />
      <Route path='/success' exact element={ <SuccessMess /> } />
      <Route path='/:id' element={ <MainWithId /> } />
      <Route path='/:moviename/:price' element={ <SeatBooking  /> } />     
      <Route path='/:moviename/:price/:numberOfTickets' element={<PaymentPage />} />
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/search/:searchMovie' element={ <ShowSearchResult />} />
    </Routes>
  );
}

export default App;
