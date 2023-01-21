import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import './iframe.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "45%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IFrame = (cardData) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        console.log(cardData)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    let price = Math.floor(Math.random() * (300 - 250 + 1)) + 250;
    // const []

    return(
        <div>
            <button onClick={handleOpen}>Open</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <CloseIcon className='closeIframe' onClick={handleClose}/>
                <div className='alphaIFreame'>
                    <div className='betaImage'>
                        <img src={`https://image.tmdb.org/t/p/original${cardData.cardData.poster_path}`} alt="image" className='iFrameImg'/>
                    </div>
                    <div className='betaContent'>
                        <h1>{cardData.cardData.title}</h1>
                        <div className='rating'>
                            <StarIcon />
                            <div><b>{cardData.cardData.vote_average}/10</b></div>
                        </div>
                        <p className='gamaContent'>{cardData.cardData.original_language.toUpperCase()}</p>
                        <p className='gamaContent'>{Math.floor(Math.random() * (150 - 100 + 1)) + 100} minutes * Action{}</p>
                        <p className='gamaContent'>{cardData.cardData.overview}</p>
                        <p className='gamaContent'>₹{price}</p>
                        <div className='iFrameBtnDiv gamaContent'>
                            <button className='iFramebtn' >Book Ticket</button>
                            <button className='iFramebtn'  >Wishlist</button>
                        </div>
                    </div>
                </div>
            </Box>
            </Modal>
    </div>
    )
}

export default IFrame;