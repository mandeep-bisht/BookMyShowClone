import './mainsection.css'
import Cards from './Cards'

const Mainsection = () => {

    return(
        <>
            <div className='mainSection'>
                <h1>Now Playing</h1>
                <div className='cardsDiv'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Mainsection