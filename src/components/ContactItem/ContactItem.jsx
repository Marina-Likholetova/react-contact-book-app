import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/slices/users/usersSlice";



export default function ContactItem(props) {
    const { id, name, username, phone, sequence } = props;
    const dispatch = useDispatch();

    const onDeleteContact = () => {
        dispatch(deleteUser({id}));
    }

    return (
        <li className="list-item">
            <span>{sequence}</span>
            <span>{name}</span>
            <span>{username}</span>
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
