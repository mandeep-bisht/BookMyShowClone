import React from 'react';
import TextField from '@mui/material/TextField';
import './loginpage.css'

const TextFields = (props) => {

    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return(
        <>
            <TextField
            id="outlined-name"
            className={props.className}
            type={props.type}
            label={props.lable}
            value={name}
            onChange={handleChange}
            />
        </>
    )
}

export default TextFields;