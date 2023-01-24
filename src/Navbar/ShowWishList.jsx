import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";
import ShowWishListItems from './ShowWishListItems';



const ShowWishLisht = () => {

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
                <FavoriteIcon fontSize="large" style={{ color: '#ffffff' }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                </FavoriteIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}>
                    {isAuthenticated ? 
                    <ShowWishListItems /> : 
                    <MenuItem onClick={loginWithRedirect}>Please Login First</MenuItem>}
                </Menu>
            </div>
        </>
    )
}

export default ShowWishLisht;