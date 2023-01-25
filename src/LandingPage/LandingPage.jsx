import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Mainsection from "../Mainsection/Mainsection";
import axios from "axios";
import { useEffect } from "react";
import MainWithId from "../Mainsection/MainWithId";
import { useParams } from "react-router-dom";
import ShowSearchResult from "../Navbar/ShowSearchResult";



const LandingPage = () => {

    const { searchMov } = useParams();

    return(
        <>
            <Navbar />
            <Sidebar />
            <Mainsection />
            <MainWithId />
            <ShowSearchResult searchMov={searchMov} />
        </>
    )
}

export default LandingPage;