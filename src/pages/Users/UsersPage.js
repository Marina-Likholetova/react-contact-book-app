import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";
import { fetchUsers } from "../../store/slices/users/usersSlice";
import useNavigation from "../../hooks/useNavigation" 
import { ADD_NEW_PATH } from "../../constants/api";


export default function UsersPage({routes}) {
    const { value: contacts, error, loading, actionText } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { moveTo } = useNavigation();
    const { url } = useRouteMatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    

    return (
        <Layout
            error={error}
            loading={loading}
            actionText={actionText}
            sidebar={() => (
                <>
                    <List to={url} list={contacts} />
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ textTransform: "none" }}
                        onClick={() => {
                            moveTo(url + ADD_NEW_PATH)
                        }}
                    >
                        Add new
                    </Button>

                </>
            )}
            routes={routes}
        />
    );
}
