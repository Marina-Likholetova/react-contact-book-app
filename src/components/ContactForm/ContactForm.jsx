import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import { Button, capitalize, Stack, TextField } from "@mui/material";
import useNavigation from "../../hooks/useNavigation";
import mergeFormInputs from "../../utils/form/mergeFormInputs";
import initialFields from "../../constants/initialFields.js";
import "./ContactForm.css"



export default function ContactForm({ user, onAddUser, onEditUser }) {
    const [inputs, setInputs] = useState(initialFields);
    const { moveBackward, moveToUsers } = useNavigation();
    const validationSchema = yup.object().shape({
        name: yup.string().required("Required").max(20).min(2),
        username: yup.string().required("Required").max(20).min(2),
        email: yup.string().email("Invalid email").required("Required"),
        phone: yup.string().required("Required").trim(),
        website: yup.string().nullable(),
    });

    useEffect(() => {
        if (user) {
            setInputs((prev) => mergeFormInputs(prev, user));
        }
    }, [user])


    const onReset = () => {
        if (user) {
            moveBackward();
        } else {
            moveToUsers();
        }
    };


    const onSubmit = async (values) => {
          if (user) {
            await onEditUser({ ...user, ...values })
          } else {
            await onAddUser(values)
        }
        moveToUsers();
    };

    return (
        <Formik
            initialValues={inputs}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <Form className="form">
                        <Box sx={{ mt: 0, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                            {Object.keys(initialFields).map((input) => (
                                <Field
                                    as={TextField}
                                    key={input}
                                    variant="outlined"
                                    label={capitalize(input)}
                                    name={input}
                                    error={formik.touched[input] && formik.errors[input]}
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
