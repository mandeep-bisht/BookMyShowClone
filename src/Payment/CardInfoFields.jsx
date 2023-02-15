import { useState } from "react";

const CardInfoFields = (props) => {

    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <>
            <div className={props.className}>
                <p>{props.labelName}</p>
                <input type={props.type} className="field" value={value} onChange={handleChange} required maxLength={props.max} minLength={props.min}/>
            </div>
        </>
    )
}

export default CardInfoFields;