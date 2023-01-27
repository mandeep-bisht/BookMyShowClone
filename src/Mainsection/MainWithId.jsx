import './mainsection.css'
import Cards from './Cards'
import { useEffect, useState } from 'react'
import axios from 'axios'
import IFrame from './IFrame'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'


const MainWithId = () => {
    
    const { id } = useParams();

    const [ card, setCard ] = useState({results : []});

    const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            const data = response.data;
            setCard(data)
        })
        .catch(error => {
            console.log(error);
        });
    },[]);
    
    return(
        <>
            <Navbar />
            <Sidebar />
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

export default MainWithId;