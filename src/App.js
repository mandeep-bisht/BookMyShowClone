import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Mainsection from './Mainsection/Mainsection';
import SignUp from './Login/SignUp';
import PaymentPage from './Payment/PaymentPage';
import Seating from './Seating/Seating';
import { useState } from 'react';
import MyTest from './MyTest';
import LoginPage from './Login/LoginPage';


function App() {

  return (
    <>
      {/* <Navbar />
      <Sidebar />
      <Mainsection /> */}

      <SignUp />
      {/* <LoginPage /> */}
      

      {/* <PaymentPage /> */}
      {/* <Seating /> */}
      {/* <MyTest /> */}
    </>
  );
}

export default App;
