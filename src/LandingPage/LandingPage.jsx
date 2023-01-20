import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Mainsection from "../Mainsection/Mainsection";
import axios from "axios";
import { useEffect } from "react";


const LandingPage = () => {

    return(
        <>
            <Navbar />
            <Sidebar />
            <Mainsection />
        </>
    )
}

export default LandingPage;