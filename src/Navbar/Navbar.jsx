import './nav.css'
import NavLogo from '../Images/bookmyshowNoBg.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from 'react';

const Navbar = () => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    const [isShown, setIsShown] = useState(false);
    

    return(
        <>
            <nav className='mainNav'>
                <div className='leftSide'>
                    <img src={NavLogo} className='navLogo'/>
                </div>
                <div className='leftSide'>
                    <div className='search'>
                        <input type='text' placeholder='Search' className='searchField'/>
                        <button className='btn'>Search</button>
                    </div>
                    <div className='icons'>
                        <a className='like'><FavoriteIcon fontSize="large" style={{ color: '#ffffff' }}/></a>
                        <a>{ (isAuthenticated) ? 
                            (<div><PersonIcon onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} fontSize="large" style={{ color: '#ffffff' }} className = 'personIcon' />
                            {isShown && (
                                <div className='profileDropdown'>
                                    <div>{user.name}</div>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</button>
                                    {console.log(user)}
                                </div>
                            )}</div>) 
                            : <button onClick={() => loginWithRedirect()}>Login</button>}
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

