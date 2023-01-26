import React, { useState } from "react";
import style from './Input.module.css';

function Input() {
    const [value, setValue] = useState('Anggita Salsabilah');

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const handleClick = () =>{
        alert(`Halo, ${value}`);

    }

    return(
        <>
            <input className={style.inputField} onChange={handleChange} type="text" value={value} /><br/>
            <button onClick={()=>handleClick()} type="button">Submit</button>
        </>
     
    );
}

export default Input;
