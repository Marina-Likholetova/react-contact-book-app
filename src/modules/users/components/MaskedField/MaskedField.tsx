import React from 'react'
import InputMask from "react-input-mask";
import { TextField, TextFieldProps } from "@mui/material";


const MaskedField: React.FC<any> = (props)=> {
    console.log("MAsskProps", props)

    return (
        <InputMask {...props} mask="(999) 999-9999">
            {
                (inputProps: TextFieldProps) => {
                    console.log("inputProps", inputProps)
                    return <TextField {...inputProps} />;
                }
            }
         </InputMask>

    );
}

export default MaskedField;
