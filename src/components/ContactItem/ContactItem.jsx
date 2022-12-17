import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import capitalizeFirstLetter  from "../../utils/capitalizeFirstLetter";


export default class ContactItem extends Component {
    render() {
        const { id, firstName, lastName, phone, sequence, onDeleteContact } = this.props;
        return (
            <li>
                <span>{sequence}</span>
                <span>{capitalizeFirstLetter(firstName)}</span>
                <span>{capitalizeFirstLetter(lastName)}</span>
                <span>{phone}</span>
                <span>
                    <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => onDeleteContact(id)}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                </span>
            </li>
        );
    }
}
