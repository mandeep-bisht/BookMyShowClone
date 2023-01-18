import TextFields from "../Login/TextFields";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CardInfoFields from "./CardInfoFields";
import UseRadioGroup from './UseRadioGroup'


const PaymentCard = () => {
    return(
        <>
            <h2>Payment</h2>
            <div className="userInfo">
                <TextFields type="text" lable = "First name *" className='textField'/>
                <TextFields type="text" lable = "Last name *" className='textField'/>
                <TextFields type="text" lable = "Email *" className='textField'/>
            </div>
            <div className="paymentMode">
                {/*
                    https://mui.com/material-ui/react-radio-button/#standalone-radio-buttons
                */}
                <UseRadioGroup />
            </div>
            <div className="cardDetails">
                <CardInfoFields labelName="Name on card" type="text" className="cardInfoField"/>
                <p className="fullNameWarning">Full name as displayed on card</p>
                <CardInfoFields labelName="Card Number" type="number" className="cardInfoField" />
                <CardInfoFields labelName="Expiration" type="text" className="cardInfoField" />
                <CardInfoFields labelName="CVV" type="number" className="cardInfoField" />
            </div>
            <button className="payBtn">Proceed to pay</button>
        </>
    )
}

export default PaymentCard;