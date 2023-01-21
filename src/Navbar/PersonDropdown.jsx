import React from "react";
import './nav.css'
import { useAuth0 } from "@auth0/auth0-react";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const PersonDropdown = () => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);

    return(
        <>
            <div className="prsonDropData">
                <MenuItem>{user.name}</MenuItem>
                <MenuItem>My account</MenuItem>
            </div>
        </>
    )
}

export default PersonDropdown;

{/* <div className='profileDropdown'>
    <div>{user.name}</div>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</button>
    {console.log(user)}
</div> */}