import React from "react";
import generateRandomNumber from "../../utils/generateRandomNumber";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";




export default function ContactList({ list, listHeaders, deleteContact }) {
    return (
        <ul className="contact-list">
            {listHeaders && (
                <li className="list-header">
                    {listHeaders.map((header) => (
                        <span key={generateRandomNumber()}>{header}</span>
                    ))}
                </li>
            )}
            {list?.map((item, i) => (
                <ContactItem
                    key={item.id}
                    {...item}
                    sequence={i + 1}
                    deleteContact={deleteContact}
                />
            ))}
        </ul>
    );
}
