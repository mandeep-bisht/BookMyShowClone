import MenuItem from '@mui/material/MenuItem';
import { useAuth0 } from "@auth0/auth0-react";


const ShowWishListItems = () => {

    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    return(<>
        {}
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
    </>)
}

export default ShowWishListItems;