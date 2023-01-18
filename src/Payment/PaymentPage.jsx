import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SummaryCard from './SummaryCard'
import PaymentCard from './PaymentCard';
import './payment.css'

const PaymentPage = () => {

    return(
        <>
            <a><ArrowBackIcon /></a>
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