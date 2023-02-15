import successImage from "../Images/5869.jpg"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import './success.css'

const SuccessMess = () => {

    const { user } = useAuth0();

    return(
        <>
            <div className="successCard">
                <p>THANKS {user?.name}</p>
                <img className="successImage" src={successImage} alt="Success Image"/>
                <p>We received your purchase request</p>
                <p>we'll be in touch shortly!</p>
                <Link to="/">Click me to get back to Home</Link>
            </div>
        </>
    )
}

export default SuccessMess;