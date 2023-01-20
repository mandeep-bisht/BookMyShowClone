import './mainsection.css'

const Cards = ({card}) => {

    return(
        <>
            {card.results.map((currVal) => {return(
                <div className="card" >
                    <img src={`https://image.tmdb.org/t/p/original${currVal.poster_path}`} alt="img" />
                    <h4>{currVal.title}</h4>
                    <div className="info">
                        <p>{currVal.original_language.toUpperCase()}</p>
                        <p>{currVal.vote_average}</p>
                    </div>
                </div>
            )})}
        </>
    )
}

export default Cards;