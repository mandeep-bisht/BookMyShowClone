import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Mainsection/Cards";


const ShowSearchResult = (searchMov) => {
    //bottom one is for searching the movie 
    const [ card, setCard ] = useState({results : []});

    const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMov}&page=1&include_adult=false`)
        .then(response => {
            const data = response.data;
            console.log("from search", data)
            setCard(data)
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    return(
        <>
            <div className='mainSection'>
                <h1>Now Playing</h1>
                <div className='cardsDiv'>
                    <Cards  card={card} />
                    {/* <Cards /> */}
                    
                </div>
            </div>
        </>
    )
}

export default ShowSearchResult;