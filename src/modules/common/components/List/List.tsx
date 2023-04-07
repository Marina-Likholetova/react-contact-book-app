import React from "react";
import { NavLink } from "react-router-dom";
import { Album } from "entities/album";
import { User, isUser } from "entities/user";
import "./List.css";

type Props = {
    to: string;
    list: User[] | Album[]
}

const List: React.FC<Props> = ({ to, list }) => {
    return (
        <ul className="list">
            {list &&
                list.map((item: User | Album) => (
                    <li className="list-item" key={item.id}>
                        <NavLink to={`${to}/${item.id}`} className="list__link">
                            {isUser(item) ? item.name : item.title}
                        </NavLink>
                    </li>
                ))}
        </ul>
    );
}

export default List;
