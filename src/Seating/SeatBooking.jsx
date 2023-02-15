import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import './seatBooking.css'

const SeatBooking = () => {

    const { moviename, price } = useParams();

    const [selectedSeat, setSelectedSeat] = useState([]);
    const [numberOfTickets, setSumberOfTickets] = useState(0);
    const onSeatClick = (index) => {
        let tempArray = [...selectedSeat];
        let seatIndex = tempArray.indexOf(index);
        if(seatIndex > -1) {
            tempArray.splice(seatIndex, 1);
        } else {
            tempArray.push(index);
        }
        setSelectedSeat(tempArray);
        setSumberOfTickets(tempArray.length);
        console.log(numberOfTickets);
    };

    const handleOnSubmitSeating = (event) => {
        event.preventDefault();
        if(numberOfTickets != 0){
            window.location.href = `/${moviename}/${price}/${numberOfTickets}`;
        }
        else{
            toast.error("Please select your seat");
        }
    }

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="seatBooking-container" >
        <form onSubmit={handleOnSubmitSeating}>
            <div className="heading">
                <h1><u>Book Ticket</u></h1>
            </div>
            <div className="booking-details" >
                <div className="cinema" >
                    <label for="cinema-name" >Cinema</label>
                    <select id="cinema-name" required >
                        <option value="" hidden selected>Select Cinema</option>
                        <option value="wave" >Wave Priya Mall, Kashipur</option>
                        <option value="cinepolis" >PRV Pacific Mall, Dehradun</option>
                        <option value="singapurmall" >PVR WalkWay, Haldwani</option>
                    </select>
                </div>
                <div className="booking-date" >
                    <label for="date" >Booking Date</label>
                    <input type="date" id="date" min={disablePastDate()} required />
                </div>
                <div className="booking-time" >
                    <label for="cinema-time" >Time</label>
                    <select id="cinema-time" required >
                        <option value="" hidden selected >Select Time</option>
                        <option value="10:00_am" >10:00 AM</option>
                        <option value="01:00_pm" >01:00 PM</option>
                        <option value="04:00_pm">04:00 PM</option>
                        <option value="07:00_pm">07:00 PM</option>
                        <option value="10:00_pm">10:00 PM</option>
                    </select>
                </div>
            </div>
            <div className="screen-container" >
                <div className="na" >
                    <p></p>
                    <span>N/A</span>
                </div>
                <div className="selected" >
                    <p></p>
                    <span>Selected</span>
                </div>
                <div className="occupied" >
                    <p></p>
                    <span>Occupied</span>
                </div>
            </div>
            <div className="screen trapezium" >

            </div>
            <div className="seats" >
                {[...Array(10)].map((_, i) => (
                    <div key={i}>
                        {[...Array(10)].map((_, j) => (
                            <p className={selectedSeat.indexOf(i*10+j) > -1 ? 'selected-seat' : ''}
                            onClick={() => onSeatClick(i*10+j)} key={j}>{`${i}-${j}`}</p>
                        ))}
                    </div>
                ))}
            </div>

            <div className="btnDiv">
                <button type="submit" className="booking-btn" >Submit</button>
            </div>
        </form>
        <ToastContainer />
        </div>
    )
}

export default SeatBooking;