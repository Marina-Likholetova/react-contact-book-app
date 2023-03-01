import React from "react";
import { NavLink } from "react-router-dom";
import "./List.css";


export default function List({ to, list }) {
    return (
        <ul className="list">
            {list &&
                list.map((item) => (
                    <li className="list-item" key={item.id}>
                        <NavLink to={`${to}/${item.id}`} className="list__link">
                            {item.name || item.title}
                        </NavLink>
                    </li>
                ))}
        </ul>
    );
}
