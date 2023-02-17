import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { Button } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";
import { USERS_PATH } from "../../constants/api";
import { fetchUsers } from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router";


export default function UsersPage() {
    const { value: contacts, error, loading, actionText } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { moveTo } = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <Layout
            error={error}
            loading={loading}
            actionText={actionText}
            children={() => (
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
