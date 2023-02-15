import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import CollectionsIcon from "@mui/icons-material/Collections";
import { deleteUser, fetchSingleUser } from "../../store/slices/users/usersSlice";
import useNavigation from "../../hooks/useNavigation";
import "./UserItem.css";



export default function UserItem() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const { moveToUsers, moveToAlbumsByUserId } = useNavigation();
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteUser(id)).then(() => moveToUsers());
    };

    const onMoveToUserAlbums = () => {
        moveToAlbumsByUserId(id);
    };

    useEffect(() => {
        dispatch(fetchSingleUser(id)).then(({ payload }) => setUser(payload));
    }, [id]);

    return (
        <div className="user-profile">
            {user && (
                <>
                    <div className="user-info">
                        <span className="user-info__item">
                            Name: <span>{user.name}</span>
                        </span>
                        <span className="user-info__item">
                            Username: <span>{user.username}</span>
                        </span>
                        <span className="user-info__item">
                            Phone: <span>{user.phone}</span>
                        </span>
                        <span className="user-info__item">
                            Email: <span>{user.email}</span>
                        </span>
                        <span className="user-info__item">
                            Website: <span>{user.website}</span>
                        </span>
                        <span className="user-info__item">
                            <Fab variant="extended" size="small" onClick={onMoveToUserAlbums}>
                                <CollectionsIcon sx={{ mr: 1 }} />
                                Albums
                            </Fab>
                        </span>
                    </div>
                    <div className="user-forms">
                        <Form action="edit">
                            <Button type="submit" variant="outlined">
                                Edit
                            </Button>
                        </Form>
                        <Form>
                            <Button variant="outlined" color="error" onClick={onDelete}>
                                Delete
                            </Button>
                        </Form>
                    </div>
                </>
            )}
        </div>
    );
}
