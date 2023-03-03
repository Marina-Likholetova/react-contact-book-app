import React from 'react'
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function MaskedField(props) {
    return (
        <InputMask {...props} mask="(999) 999-9999">
            {(inputProps) => {
                return <TextField {...inputProps} />;
            }}
        </InputMask>
    );
}
