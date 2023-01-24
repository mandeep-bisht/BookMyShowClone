import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GetGenres = ({genre}) => {

    const showGenre = (shownId) => {




    }

    return(
        <>
            {genre.map(genre => (
                <li>
                <Link to={`/${genre.id}`}>
                    <button key={genre.id} onClick={() => showGenre(genre.id)} className="genreBtn">{genre.name}</button>
                </Link>
                </li>
            ))}
        </>
    )
}

export default GetGenres;