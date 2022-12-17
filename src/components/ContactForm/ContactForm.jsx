import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import validate from "../../utils/validate";


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



export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onReset = () => {
        this.setState(initialState);
        this.props.toggleShowForm();
    };

    onChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: validate(value, name),
                error: false,
            },
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, phone } = this.state;

        if (phone.value.length >= 19) {
            this.props.addContact(firstName.value, lastName.value, phone.value);
            this.onReset();
        } else {
            this.setState({
                phone: { ...phone, error: true },
            });
        }
    };

    render() {
        const isDisableOk = !Object.values(this.state).every((item) => item.value && !item.error);
        return (
            <>
                <form action="" onSubmit={this.onSubmit} onReset={this.onReset}>
                    <Box sx={{ mt: 2, mb: 2, "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
                        {Object.values(this.state).map((input) => (
                            <TextField
                                {...input}
                                onChange={this.onChange}
                                variant="outlined"
                                helperText={input.error ? "Phone number should be 12 digit number" : ""}
                                required
                            />
                        ))}
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            disabled={isDisableOk}
                        >
                            Ok
                        </Button>
                        <Button
                            type="reset"
                            variant="contained"
                            color="error"
                        >
                            Cancel
                        </Button>
                    </Stack>
                </form>
            </>
        );
    }
}
