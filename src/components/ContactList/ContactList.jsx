import React, { useState } from "react";
import { Button } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";
import List from "../List/List";
import generateRandomNumber from "../../utils/generateRandomNumber";
import listHeaders from "../../data/listData";
import contactsDb from "../../data/contactsData";



export default function ContactList() {
    const [contacts, setContacts] = useState(contactsDb);
    const [isShowForm, setIsShowForm] = useState(false);

    const addContact = (firstName, lastName, phone) => {
        setContacts((prev) => [
            ...prev,
            {
                firstName,
                lastName,
                phone,
                id: generateRandomNumber(),
            },
        ]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

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
            <Button
                variant="contained"
                disabled={isShowForm}
                onClick={toggleShowForm}
            >
                Add Contact
            </Button>
            {isShowForm && (
                <ContactForm
                    addContact={addContact}
                    toggleShowForm={toggleShowForm}
                />
            )}
        </>
    );
}
