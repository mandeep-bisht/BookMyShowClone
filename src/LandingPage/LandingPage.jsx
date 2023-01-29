import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Mainsection from "../Mainsection/Mainsection";
import axios from "axios";
import { useEffect } from "react";
import MainWithId from "../Mainsection/MainWithId";
import ShowSearchResult from "../Navbar/ShowSearchResult";
import { ToastContainer, toast } from 'react-toastify';


const LandingPage = () => {



    return(
        <>
            <Navbar />
            <Sidebar />
            <Mainsection />
            <MainWithId />
            <ShowSearchResult/>
            <ToastContainer />
        </>
    )
}

export default LandingPage;