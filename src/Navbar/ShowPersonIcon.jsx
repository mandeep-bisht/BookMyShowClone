import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";
import ShowWishListItems from './ShowWishListItems';
import PersonIcon from '@mui/icons-material/Person';
import './nav.css'

const ShowPersonIcon = () => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <>
            <div>
                <PersonIcon  fontSize="large" style={{ color: '#ffffff' }} className = 'personIcon' 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                </PersonIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem >{user.name}</MenuItem>
                    <MenuItem onClick={logout} ><button  className='personLogoutBtn'>Logout</button></MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default ShowPersonIcon;