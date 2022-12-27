import React, { useState } from "react";
import { Button } from "@mui/material";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import generateRandomNumber from "./utils/generateRandomNumber";
import listHeaders from "./data/listData";
import contactsDb from "./data/contactsData";



export default function App() {
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
        <div className="container">
            <h1 className="title">Contacts</h1>
            <ContactList
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
                />)
            }
        </div>
    );
}
