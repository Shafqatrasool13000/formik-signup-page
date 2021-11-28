import React from 'react'
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {
    return (
        <>
            <TextField
                label={props.label} 
               name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onchange}
                onBlur={props.onblur}
                />
        </>
    );
}
