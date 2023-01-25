import './nav.css'
import NavLogo from '../Images/bookmyshowNoBg.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import PersonDropdown from './PersonDropdown';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import ShowWishLisht from './ShowWishList';
import ShowPersonIcon from './ShowPersonIcon';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[searchMovie, setsearchMovie] = useState('');
    const handleChnageText = (event) => {
        setsearchMovie(event.target.value)
    }


    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    const [isShown, setIsShown] = useState(false);
    
    const home = useNavigate()
    const goHome = () => {
        home("/");
    }

    return(
        <>
            <nav className='mainNav'>
                <div className='leftSide'>
                    <img src={NavLogo} onClick={goHome} className='navLogo'/>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search' className='searchField' onChange={handleChnageText} value={searchMovie}/>
                    <Link to={`/${searchMovie}`}><button className='btn'>Search</button></Link>
                </div>
                <div className='icons'>
                    <ShowWishLisht />
                    { (isAuthenticated) ? 
                    (<ShowPersonIcon />) : 
                    (<button className='loginLogoutBtn' onClick={() => loginWithRedirect()}>Login</button>)}
                </div>
            </nav>
        </>
    )
}

export default Navbar;

//<Tooltip title={user.name} arrow><button className='loginLogoutBtn' onClick={() => logout()}>Logout</button></Tooltip>