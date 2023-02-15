import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout/Layout";
import List from "../../components/List/List";
import { USERS_PATH } from "../../constants/api";
import { fetchUsers } from "../../store/slices/users/usersSlice";


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
            children={() => (
                <>
                    <List to={USERS_PATH} list={contacts} />
                </>
            )}
        />
    );
}
