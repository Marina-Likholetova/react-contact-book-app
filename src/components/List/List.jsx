import React from "react";
import generateRandomNumber from "../../utils/generateRandomNumber";
import ContactItem from "../ContactItem/ContactItem";
import "./List.css";




export default function List({ list, listHeaders, deleteContact }) {
    return (
        <ul className="list">
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
