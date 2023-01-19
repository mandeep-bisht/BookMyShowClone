import './nav.css'
import NavLogo from '../Images/bookmyshowNoBg.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    // const ShowLoginPerson = () => {

    //     if(!isAuthenticated){
    //         return (
    //             <>
    //                 <button>Logout</button>
    //             </>
    //         )
    //     }
    //     return(
    //         <button onClick={() => loginWithRedirect()}>Login</button>
    //     )
    // }

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
                        <a>{ (isAuthenticated) ? (<button>Logout</button>) : <button onClick={() => loginWithRedirect()}>Login</button>}</a>
                        {console.log(isAuthenticated)}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;