import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { Button } from "@mui/material";
import Layout from "modules/common/components/Layout/Layout";
import List from "modules/common/components/List/List";
import { USERS_PATH } from "modules/common/constants/api";
import { fetchUsers } from "../slices/usersSlice";



export default function UsersPage() {
    const { value: contacts, error, loading, actionText } = useSelector((state) => state.users);
    const dispatch = useDispatch();

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
                    <List to={USERS_PATH} list={contacts} />
                    <Form action="new">
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ textTransform: "none" }}
                            type="submit"
                        >
                            Add new
                        </Button>
                    </Form>
                    
                </>
            )}
        />
    );
}
