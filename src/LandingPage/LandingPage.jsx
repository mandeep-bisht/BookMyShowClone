import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Mainsection from "../Mainsection/Mainsection";
import axios from "axios";
import { useEffect } from "react";
import MainWithId from "../Mainsection/MainWithId";


const LandingPage = () => {

    return(
        <>
            <Navbar />
            <Sidebar />
            <Mainsection />
            <MainWithId />
        </>
    )
}

export default LandingPage;