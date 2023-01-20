import axios from "axios";
import { useEffect } from "react";

const GetGenres = ({genre}) => {

    // console.log(`genre ${genre}`)

    return(
        <>
            {genre.map(genre => (
                <li><button key={genre.id} >{genre.name}</button></li>
            ))}
        </>
    )
}

export default GetGenres;