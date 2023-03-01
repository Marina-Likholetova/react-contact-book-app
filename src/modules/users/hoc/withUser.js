import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { deleteUser, fetchSingleUser, updateUser } from '../slices/usersSlice';
 
 
const withUser = (Component) => {
    const WithUser = (props) => {
        const [user, setUser] = useState(null);
        const { id } = useParams();
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchSingleUser(id)).then(({ payload }) => setUser(payload));
        }, [id]);

        
        const onDeleteUser = () => {
            dispatch(deleteUser(id))
        }

        const onSubmit = (payload) => {
            dispatch(updateUser(payload))
        }


        return (
            <Component
                user={user}
                onDeleteUser={onDeleteUser}
                onSubmit={onSubmit}
                {...props}
            />
        )
    }


    return WithUser

}

export default withUser