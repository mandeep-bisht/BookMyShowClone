import './nav.css'
import NavLogo from '../Images/bookmyshowNoBg.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {

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
                        <a className='personIcon'><PersonIcon fontSize="large" style={{ color: '#ffffff' }}/></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;