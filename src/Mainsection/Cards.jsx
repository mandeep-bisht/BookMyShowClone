import './mainsection.css'

const Cards = ({card}) => {

    return(
        <>
            {card.results.map((currVal) => {return(
                <div className="card" >
                    <img src="https://picsum.photos/200/300" alt="img" />
                    <h5>{currVal.title}</h5>
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