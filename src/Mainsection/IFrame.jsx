import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import { Link, Route } from 'react-router-dom';
import PaymentPage from '../Payment/PaymentPage';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import './iframe.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "45%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IFrame = ({cardData, open, handleClose}) => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    const price = Math.floor(Math.random() * (300 - 250 + 1)) + 250;

    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem(user.email)) || []
    );

    useEffect(() => {
        localStorage.setItem(user.email , JSON.stringify(wishlist));
    },[wishlist]);
        const saveToWishList = () => {

        toast("Movie is added to your wishlist successfully!")
        const movieId = cardData.id;
        const movieTitle = cardData.title;
        setWishlist([...wishlist, {movieId, movieTitle}]);
        
    }
    

    return(<>
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <CloseIcon className='closeIframe' onClick={handleClose}/>
                <div className='alphaIFreame'>
                    <div className='betaImage'>
                        <img src={`https://image.tmdb.org/t/p/original${cardData.poster_path}`} alt="image" className='iFrameImg'/>
                    </div>
                    <div className='betaContent'>
                        <h1>{cardData.title}</h1>
                        <div className='rating'>
                            <StarIcon />
                            <div><b>{cardData.vote_average}/10</b></div>
                        </div>
                        <p className='gamaContent'>{cardData.original_language}</p>
                        <p className='gamaContent'>{Math.floor(Math.random() * (150 - 100 + 1)) + 100} minutes * Action{}</p>
                        <p className='gamaContent'>{cardData.overview}</p>
                        <p className='gamaContent'>₹{price}</p>
                        <div className='iFrameBtnDiv gamaContent'>
                            <Link to={`/${cardData.title}/${price}`}>
                                <button className='iFramebtn' >Book Ticket</button>
                            </Link>
                            
                            <button className='iFramebtn' onClick={saveToWishList} >Wishlist</button>
                        </div>
                    </div>
                </div>
            </Box>
            </Modal>

        {/* {callPayment && <Route path='/payment' exact element={ <PaymentPage /> } />} */}
    </div>
    </>
    )
}

export default IFrame;