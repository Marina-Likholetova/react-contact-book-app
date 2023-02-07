import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import validate from "../../utils/validate";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/slices/users/usersSlice";



const initialState = {
    firstName: {
        label: "First Name",
        name: "firstName",
        type: "text",
        value: "",
        error: false,
    },
    lastName: {
        label: "Last Name",
        name: "lastName",
        type: "text",
        value: "",
        error: false,
    },
    phone: {
        label: "Phone",
        name: "phone",
        type: "tel",
        value: "",
        error: false,
    },
};



export default function ContactForm({ toggleShowForm }) {
    const [inputs, setInputs] = useState(initialState);
    const isDisableSubmit = !Object.values(inputs).every((input) => input.value && !input.error);
    const bottomRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const onReset = () => {
        setInputs(initialState);
        toggleShowForm();
    };

    const onChange = ({ target: { name, value } }) => {
        setInputs({
            ...inputs,
            [name]: {
                ...inputs[name],
                value: validate(value, name),
                error: false,
            },
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, phone } = inputs;

        if (phone.value.length >= 19) {
            dispatch(createUser({ name: firstName.value, username: lastName.value, phone: phone.value }));
            onReset();
        } else {
            setInputs({
                ...inputs,
                phone: { ...phone, error: true },
            });
        }
    };

    return (
        <form action="" onSubmit={onSubmit} onReset={onReset} ref={bottomRef}>
            <Box sx={{ mt: 0, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                {Object.values(inputs).map((input) => (
                    <TextField
                        {...input}
                        key={input.name}
                        onChange={onChange}
                        variant="outlined"
                        helperText={input.error ? "Phone number should be 12 digit number" : ""}
                        required
                    />
                ))}
            </Box>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Button type="submit" variant="contained" color="success" disabled={isDisableSubmit}>
                    Ok
                </Button>
                <Button type="reset" variant="contained" color="error">
                    Cancel
                </Button>
            </Stack>
        </form>
    );
}
