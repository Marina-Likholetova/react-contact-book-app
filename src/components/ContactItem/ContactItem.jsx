import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";



export default function ContactItem(props) {
    const { id, firstName, lastName, phone, sequence, deleteContact } = props;

    const onDeleteContact = () => {
        deleteContact(id);
    }

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
                    onClick={onDeleteContact}
                >
                    <DeleteForeverIcon />
                </IconButton>
            </span>
        </li>
    );
}
