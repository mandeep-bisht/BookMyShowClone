import axios from "axios";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './sidebar.css'

const GetGenres = ({genre}) => {

    return(
        <>
            {genre.map(genre => (
                <li>
                <NavLink to={`/genres/${genre.id}`} className="inactive" activeClassName="active">
                    {genre.name}
                </NavLink>
                </li>
            ))}
        </>
    )
}

export default GetGenres;