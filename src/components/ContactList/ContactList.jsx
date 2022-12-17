import React, { Component } from "react";
import generateRandomNumber from "../../utils/generateRandomNumber";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";



export default class ContactList extends Component {
    render() {
        const { list, listHeaders, onDeleteContact } = this.props;
        return (
            <ul className="contact-list">
                {listHeaders && (
                    <li className="list-header">
                        {listHeaders.map((item) => (
                            <span key={generateRandomNumber()}>{item}</span>
                        ))}
                    </li>
                )}
                {list?.map((item, i) => (
                    <ContactItem
                        key={generateRandomNumber()}
                        {...item}
                        sequence={i + 1}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
            </ul>
        );
    }
}
