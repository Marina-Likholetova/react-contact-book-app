import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikProps} from "formik";
import Box from "@mui/material/Box";
import { Button, capitalize, Stack, TextField } from "@mui/material";
import useNavigation from "modules/common/hooks/useNavigation";
import mergeFormInputs from "../../utils/form/mergeFormInputs";
import initialFields from "../../constants/initialFields";
import validationSchema from "../../validation/userSchema";
import MaskedField from "../MaskedField/MaskedField";
import { User, UserForm, UserInput} from "entities/user";
import "./ContactForm.css"

type Props = {
    user: User | null;
    onSubmit: (payload: UserForm) => void
}



const ContactForm: React.FC<Props> = ({ user, onSubmit}) => {
    const [inputs, setInputs] = useState<UserForm>(initialFields);
    const { moveBackward, moveToUsers } = useNavigation();
    const inputsForm: UserInput[] = Object.keys(inputs) as UserInput[];

    useEffect(() => {
        if (user) {
            setInputs((prev) => mergeFormInputs(prev, user) as UserForm);
        }
    }, [user])


    const onReset = () => {
        moveBackward();
    };


    const handleSubmit = async (values: User | UserForm) => {
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
            {(formik: FormikProps<UserForm>) => {
                return (
                    <Form className="form">
                        <Box sx={{ mt: 0, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                            {inputsForm.map((input) => (
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

export default ContactForm;
