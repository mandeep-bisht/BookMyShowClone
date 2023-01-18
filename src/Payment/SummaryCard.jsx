
const SummaryCard = () => {
    return(
        <>
            <h3>Order Summary</h3>
            <h4>Movie Name</h4>
            <div className='ticketTypeAndPrice'>
                <p>Classic Type</p>
                <p>₹250</p>
            </div>
            <div className="numberOfTic">
                <p>Number of Ticket</p>
                <input type="number" min={1} value={1} max={100}/>
            </div>
            <div className="convinenceFeeAndAmount">
                <p>Convenience Fee (1.75%)</p>
                <p>₹8.87</p>
             </div>
            <div className='subTotal'>
                <p>Sub total</p>
                <p>₹508.75</p>
            </div>
        </>
    )
}

export default SummaryCard;