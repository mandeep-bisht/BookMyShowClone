import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SummaryCard from './SummaryCard'
import PaymentCard from './PaymentCard';
import { useNavigate, useParams } from 'react-router-dom';
import './payment.css'

const PaymentPage = () => {

    const navigate = useNavigate();

    return(
        <>
            <ArrowBackIcon onClick={() => {
                navigate(-1);
            }} />
            <div className="mainPayment alphaDiv">
                <h1>Checkout</h1>
                <div className='betaDiv'>
                    <div className="summary">
                        <SummaryCard />
                    </div>
                    <div className="paymentCard">
                        <PaymentCard/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage;