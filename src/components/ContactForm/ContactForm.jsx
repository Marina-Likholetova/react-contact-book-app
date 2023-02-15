import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Form } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import inputMask from "../../utils/form/inputMask";
import { updateUser, fetchSingleUser } from "../../store/slices/users/usersSlice";
import useNavigation from "../../hooks/useNavigation";
import mergeFormInputs from "../../utils/form/mergeFormInputs";
import "./ContactForm.css"


const initialState = {
    name: {
        label: "Name",
        name: "name",
        type: "text",
        value: "",
        error: false,
    },
    username: {
        label: "Username",
        name: "username",
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
    email: {
        label: "Email",
        name: "email",
        type: "email",
        value: "",
        error: false,
    },
    website: {
        label: "Website",
        name: "website",
        type: "text",
        value: "",
        error: false,
    },
};



export default function ContactForm() {
    const [inputs, setInputs] = useState(initialState);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { moveBackward } = useNavigation();
    const isDisableSubmit = useMemo(
        () => !Object.values(inputs).every((input) => input.value && !input.error),
        [inputs]
    );
   
    useEffect(() => {
        dispatch(fetchSingleUser(id)).then(({ payload }) =>
            setInputs((prev) => mergeFormInputs(prev, payload))
        );
    }, []);


    const onReset = () => {
        moveBackward();
    };


    const onChange = ({ target: { name, value } }) => {
        setInputs({
            ...inputs,
            [name]: {
                ...inputs[name],
                value: inputMask(value, name),
                error: value ? false : true,
            },
        });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updates = Object.fromEntries(formData);
        dispatch(updateUser({ id: Number(id), ...updates })).then(() => onReset());
    };

    return (
        <Form className="form" onSubmit={onSubmit} onReset={onReset}>
            <Box sx={{ mt: 0, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                {Object.values(inputs).map((input) => (
                    <TextField
                        {...input}
                        key={input.name}
                        onChange={onChange}
                        variant="outlined"
                        helperText={input.error ? "Required field must be filled in." : ""}
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
        </Form>
    );
}
