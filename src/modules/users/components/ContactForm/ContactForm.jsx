import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Box from "@mui/material/Box";
import { Button, capitalize, Stack, TextField } from "@mui/material";
import useNavigation from "modules/common/hooks/useNavigation";
import mergeFormInputs from "../../utils/form/mergeFormInputs";
import initialFields from "../../constants/initialFields";
import validationSchema from "../../validation/userSchema";
import MaskedField from "../MaskedField/MaskedField";
import "./ContactForm.css"



export default function ContactForm({ user, onSubmit}) {
    const [inputs, setInputs] = useState(initialFields);
    const { moveBackward, moveToUsers } = useNavigation();

    useEffect(() => {
        if (user) {
            setInputs((prev) => mergeFormInputs(prev, user));
        }
    }, [user])


    const onReset = () => {
        moveBackward();
    };


    const handleSubmit = async (values) => {
        await onSubmit({...user, ...values})
        moveToUsers();
    };

    return (
        <Formik
            initialValues={inputs}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formik) => {
                return (
                    <Form className="form">
                        <Box sx={{ mt: 0, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                            {Object.keys(initialFields).map((input) => (
                                <Field
                                    as={input === "phone" ? MaskedField : TextField}
                                    key={input}
                                    variant="outlined"
                                    label={capitalize(input)}
                                    name={input}
                                    error={!!formik.touched[input] && !!formik.errors[input]}
                                    helperText={formik.touched[input] && formik.errors[input]}
                                />
                            ))}
                        </Box>
                        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                disabled={!(formik.isValid && formik.dirty)}
                            >
                                Ok
                            </Button>
                            <Button variant="contained" color="error" onClick={onReset}>
                                Cancel
                            </Button>
                        </Stack>
                    </Form>
                );
            }}
        </Formik>
    );
}
