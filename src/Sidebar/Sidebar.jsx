import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css'
import GetGenres from './GetGeneres';

const Sidebar = () => {

    const [genre, setGenre] = useState([]);

    const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {
        const data = response.data;
        setGenre(data.genres)
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    // console.log(genre)
    return(
        <>
            <div class="sidenav">
                <h1 className='sidenavHeading'>Genres</h1>
                <ul><GetGenres genre={genre}/></ul>
            </div>
        </>
    )
}

export default Sidebar;