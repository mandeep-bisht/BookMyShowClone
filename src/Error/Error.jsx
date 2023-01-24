import { Link } from "react-router-dom";
import './error.css'

const Error = () => {
    return(
        <>
            <div className="errorPage">
                <section className="notFound">
                    <div className="errorimg">
                        <Link to="/">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
                        </Link>
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="Car"/>
                    </div>
                    <div className="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3 className="backToHome"><Link to="/">BACK TO HOME?</Link></h3>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Error;