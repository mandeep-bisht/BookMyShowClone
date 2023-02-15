import { useParams } from "react-router-dom";
import { useState } from "react";

const SummaryCard = () => {
    const { moviename, price, numberOfTickets } = useParams();
    const [ticket, setTicket] = useState(numberOfTickets);

    const setPrice = (price * ticket) + 8.87;
    const handleChange = (e) => {
        setTicket(e.target.value)
    }


    return(
        <>
            <h3>Order Summary</h3>
            <h4>{moviename}</h4>
            <div className='ticketTypeAndPrice'>
                <p>Classic Type</p>
                <p>₹{price}</p>
            </div>
            <div className="numberOfTic">
                <p>Number of Ticket</p>
                <input type="number" onChange={handleChange} min={numberOfTickets} value={ticket} max={100}/>
            </div>
            <div className="convinenceFeeAndAmount">
                <p>Convenience Fee (1.75%)</p>
                <p>₹8.87</p>
             </div>
            <div className='subTotal'>
                <p>Sub total</p>
                <p>₹{setPrice}</p>
            </div>
        </>
    )
}

export default SummaryCard;