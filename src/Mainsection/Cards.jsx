import { useState } from 'react';
import './mainsection.css'
import IFrame from './IFrame';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import axios from 'axios';
import { display } from '@mui/system';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Cards = ({card}) => {

    const [open, setOpen] = useState(false);
    const [cardData, setCardData] = useState(false);

    const handleOpen = (id) => {
        const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            const data = response.data;
            setOpen(true);
            setCardData(data);
        })
        .catch(error => {
            console.log(error);
        });
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return(
        <>
            {card.results.map((currVal) => {return(
                <>
                <div className="card" onClick={() => handleOpen(currVal.id)}>
                    <img src={`https://image.tmdb.org/t/p/original${currVal.poster_path}`} alt="img" />
                    <h4>{currVal.title}</h4>
                    <div className="info">
                        <p>{currVal.original_language.toUpperCase()}</p>
                        <p>{currVal.vote_average}</p>
                    </div>
                </div>
                </>
            )})}
            {open && <IFrame cardData={cardData} open={open} handleClose={handleClose}/>}
            
        </>

    )
}

export default Cards;