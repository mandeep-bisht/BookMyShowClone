import MenuItem from '@mui/material/MenuItem';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './menuItems.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import IFrame from '../Mainsection/IFrame';
import axios from 'axios';



const ShowWishListItems = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    let wishlistItems = JSON.parse(localStorage.getItem(user.email));

    const [wishlistData, setWIshlistData] = useState([]);
    const getData = () => {
        const wishlistMovie = JSON.parse(localStorage.getItem('wishlistMovie')) || [];
        setWIshlistData(wishlistMovie);
    }

    useEffect(() => {
        getData();
    }, [])

    const removeMenuItems = (index, movieTitle) => {
        wishlistItems.splice(index, 1);
        localStorage.setItem(user.email, JSON.stringify(wishlistItems));
        toast(`${movieTitle} is removed from wishlist`);
        getData();
    }

    const [open, setOpen] = useState(false);
    const [cardData, setCardData] = useState(false);

    const showWishlistIrame = (id) => {
        const API_KEY = 'f6c14b21d3ad03397cf8ae89dcf0c411';
        
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                const data = response.data;
                console.log(data);
                setOpen(true);
                setCardData(data);
                
            })
            .catch(error => {
                console.log(error);
            });
            setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return(<>
        {wishlistItems.map((currVal, index) =>{
            return(
                <MenuItem >
                <div className='menuItems'>
                    <div onClick={() => showWishlistIrame(currVal.movieId)}>{currVal.movieTitle}</div>
                    <div className='removeMenuItems' onClick={() => removeMenuItems(index, currVal.movieTitle)}><DeleteIcon /></div>
                </div>
                </MenuItem>
            )
        })}
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        {open && <IFrame cardData={cardData} open={open} handleClose={handleClose}/>}
    </>)
}

export default ShowWishListItems;