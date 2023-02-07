import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button } from "@mui/material";
import { fetchUsers } from "../../store/slices/users/usersSlice";
import ContactForm from "../ContactForm/ContactForm";
import List from "../List/List";
import Loader from "../Loader/Loader";
import listHeaders from "../../data/listData";
import Toast from "../Toast/Toast";




export default function ContactList() {
    const { value: contacts, error, loading, actionText } = useSelector((state) => state.users);
    const [isShowForm, setIsShowForm] = useState(false);
    const dispatch = useDispatch();

    
    useEffect(() => {
       dispatch(fetchUsers());
    }, [])


    const toggleShowForm = () => {
        setIsShowForm(!isShowForm);
    };

    return (
        <>
            <h1 className="title">Contacts</h1>
            <List list={contacts} listHeaders={listHeaders} />
            <div className="loader-container">
                {loading && <Loader />}
                {error && <Alert severity="error">Error message: {error}</Alert>}
            </div>
            <Button
                variant="contained"
                disabled={isShowForm || !!error}
                onClick={toggleShowForm}
                sx={{ m: "1em" }}
            >
                Add Contact
            </Button>
            {isShowForm && <ContactForm toggleShowForm={toggleShowForm} />}
            <Toast error={error} actionText={actionText} />
        </>
    );
}
