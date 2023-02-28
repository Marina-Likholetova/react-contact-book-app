import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { deleteUser, fetchSingleUser, updateUser } from '../store/slices/users/usersSlice';
 
 
const withUser = (Component) => {
    const WithUser = (props) => {
        const [user, setUser] = useState(null);
        const { id } = useParams();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchSingleUser(id)).then(({ payload }) => setUser(payload));
        }, [id]);


        const onEditUser = (payload) => {
            dispatch(updateUser(payload))
        }

        const onDeleteUser = () => {
            dispatch(deleteUser(id))
        }


        return (
            <Component
                user={user}
                onEditUser={onEditUser}
                onDeleteUser={onDeleteUser}
                {...props}
            />
        )
    }


    return WithUser

}

export default withUser