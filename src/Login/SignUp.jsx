import LockIcon from '@mui/icons-material/Lock';
import TextFields from './TextFields'
import Button from '@mui/material/Button';
import './loginpage.css'
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';

const SignUp = () => {


    return(
        <>
            <div className="mainLogin">
                <LockIcon />
                <h3>Sign Up</h3>
                <TextFields type="text" lable = "Name*" className='textField'/>
                <TextFields type="text" lable = "Email*" className='textField'/>
                <TextFields type="password" lable = "Password*" className='textField'/>
                <Button variant="contained" className='btn'>Register</Button>
                <p className='signAlert' >
                    <u>
                        <Link to='/login'>Already have an account? Sign In</Link>
                    </u>
                </p>
            </div>
        </>
    )
}

export default SignUp;