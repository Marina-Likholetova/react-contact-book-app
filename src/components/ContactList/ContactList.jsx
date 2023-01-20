import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import useContacts from "../../hooks/useContacts";
import ContactForm from "../ContactForm/ContactForm";
import List from "../List/List";
import Loader from "../Loader/Loader";
import listHeaders from "../../data/listData";
import Toast from "../Toast/Toast";

const API_URL = "https://jsonplaceholder.typicode.com/users/";


export default function ContactList() {
    const { contacts, error, loading, addContact, deleteContact, actionText } = useContacts(API_URL);
    const [isShowForm, setIsShowForm] = useState(false);

    const toggleShowForm = () => {
        setIsShowForm(!isShowForm);
    };

    return (
        <>
            <h1 className="title">Contacts</h1>
            <List
                list={contacts}
                listHeaders={listHeaders}
                deleteContact={deleteContact}
            />
            {loading && <Loader />}
            {error && <Alert severity="error">Error message: {error}</Alert>}
            <Button
                variant="contained"
                disabled={isShowForm || !!error}
                onClick={toggleShowForm}
                sx={{ m: "1em" }}
            >
                Add Contact
            </Button>
            {isShowForm && (
                <ContactForm
                    addContact={addContact}
                    toggleShowForm={toggleShowForm}
                />
            )}
            <Toast error={error} actionText={actionText} />
        </>
    );
}
