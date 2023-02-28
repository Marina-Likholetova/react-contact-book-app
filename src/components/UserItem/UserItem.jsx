import React from "react";
import { Form } from "react-router-dom";
import { Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import CollectionsIcon from "@mui/icons-material/Collections";
import useNavigation from "../../hooks/useNavigation";
import "./UserItem.css";



export default function UserItem({user, onDeleteUser }) {
    const { moveToUsers, moveToAlbumsByUserId } = useNavigation();
  
    // console.log("ITEM PROPS", props)
    const onDelete = () => {
        onDeleteUser().then(() => moveToUsers());
    };

    const onMoveToUserAlbums = () => {
        moveToAlbumsByUserId(user.id);
    };

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
