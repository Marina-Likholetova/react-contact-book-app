import React, { Component } from "react";
import { Button } from "@mui/material";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import generateRandomNumber from "./utils/generateRandomNumber";
import listHeaders from "./data/listData";
import contactsDb from "./data/contactsData";



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            contacts: contactsDb || [],
            isShowForm: false,
        };
    }

    addContact = (firstName, lastName, phone) => {
        this.setState((state) => ({
            contacts: [
                ...state.contacts,
                {
                    firstName,
                    lastName,
                    phone,
                    id: generateRandomNumber(),
                },
            ],
        }));
    };

    deleteContact = (id) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((contact) => contact.id !== id),
        }));
    };

    toggleShowForm = () => {
        this.setState((state) => ({
            isShowForm: !state.isShowForm,
        }));
    };

    onShowForm = () => {
        this.toggleShowForm();
    };

    render() {
        return (
            <div className="container">
                <h1 className="title">Contacts</h1>
                <ContactList
                    list={this.state.contacts}
                    listHeaders={listHeaders}
                    onDeleteContact={this.deleteContact}
                />
                <Button
                    variant="contained"
                    disabled={this.state.isShowForm}
                    onClick={this.onShowForm}
                >
                    Add Contact
                </Button>
                {this.state.isShowForm && (
                    <ContactForm
                        addContact={this.addContact}
                        toggleShowForm={this.toggleShowForm}
                    />
                )}
            </div>
        );
    }
}
