import LockIcon from '@mui/icons-material/Lock';
import TextFields from './TextFields'
import './loginpage.css'

const Loginpage = () => {

    return(
        <>
            <div className="mainLogin">
                <LockIcon />
                <h3>Sign Up</h3>
                <TextFields type="text" lable = "Name*" className='textField'/>
                <TextFields type="text" lable = "Email*" className='textField'/>
                <TextFields type="password" lable = "Password*" className='textField'/>
            </div>
        </>
    )
}

export default Loginpage;