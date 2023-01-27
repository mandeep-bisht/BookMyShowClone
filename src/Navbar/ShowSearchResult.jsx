import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Mainsection/Cards";
import Navbar from "./Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";


const ShowSearchResult = () => {
    const { searchMovie } = useParams();
    const [ card, setCard ] = useState({results : []});

    const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`)
        .then(response => {
            const data = response.data;
            setCard(data)
        })
        .catch(error => {
            console.log(error);
        });
    },[searchMovie]);

    return(
        <>
            <Navbar />
            <Sidebar />
            <div className='mainSection'>
                <h1>Now Playing</h1>
                <div className='cardsDiv'>
                    {searchMovie && <Cards  card={card} />}
                </div>
            </div>
        </>
    )
}

export default ShowSearchResult;