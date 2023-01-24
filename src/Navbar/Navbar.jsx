import './nav.css'
import NavLogo from '../Images/bookmyshowNoBg.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';
import PersonDropdown from './PersonDropdown';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {

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
                <div className='leftSide'>
                    <div className='search'>
                        <input type='text' placeholder='Search' className='searchField'/>
                        <button className='btn'>Search</button>
                    </div>
                    <div className='icons'>
                        <a className='like'><FavoriteIcon fontSize="large" style={{ color: '#ffffff' }}/></a>
                        { (isAuthenticated) ? 
                        (<Tooltip title={user.name}><button className='loginLogoutBtn' onClick={() => logout()}>Logout</button></Tooltip>) : 
                        (<button className='loginLogoutBtn' onClick={() => loginWithRedirect()}>Login</button>)}
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

