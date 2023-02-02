import React from "react";
import generateRandomNumber from "../../utils/generateRandomNumber";
import ContactItem from "../ContactItem/ContactItem";
import "./List.css";


export default function List({ list, listHeaders }) {
    return (
        <ul className="list">
            {listHeaders && (
                <li className="list-header list-item">
                    {listHeaders.map((header) => (
                        <span key={generateRandomNumber()}>{header}</span>
                    ))}
                </li>
            )}
            <li className={list?.length > 5 ? "list-info" : ""}>
                <ul>
                    {list?.map((item, i) => (
                        <ContactItem
                            key={item.id}
                            {...item}
                            sequence={i + 1}
                        />
                    ))}
                </ul>
            </li>
        </ul>
    );
}
