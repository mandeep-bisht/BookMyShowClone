import LockIcon from '@mui/icons-material/Lock';
import TextFields from './TextFields'
import Button from '@mui/material/Button';
import './loginpage.css'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return(
        <>
            <div className="mainLogin">
                <LockIcon />
                <h3>Sign Up</h3>
                <TextFields type="text" lable = "Email*" className='textField'/>
                <TextFields type="password" lable = "Password*" className='textField'/>
                <Button variant="contained" className='btn'>Login</Button>
                <p className='signAlert'>
                    <u>
                        <Link to='/'>Don't have an account yet?  Sign Up</Link>
                    </u>
                </p>
            </div>
        </>
    )
}

export default LoginPage;