import React, { useState, useEffect, ComponentType } from 'react'
import { useParams } from 'react-router'
import { deleteUser, fetchSingleUser, updateUser } from '../slices/usersSlice';
import { User, UserForm } from 'entities/user';
import useAppDispatch from 'modules/common/hooks/useDispatch';
 

interface WithUserProps {
    user: User | null;
    onDeleteUser: (callback: Function) => void
    onSubmit: (payload: UserForm) => void
} 

export default function withUser<P extends WithUserProps> (Component: ComponentType<P>): React.FC<Omit<P, keyof WithUserProps>>  {
    const WithUser: React.FC<Omit<P, keyof WithUserProps>> = (props) => {
        const [user, setUser] = useState<User | null>(null);
        const { id } = useParams();
        const dispatch = useAppDispatch();

        useEffect(() => {
            if (id) {
                dispatch(fetchSingleUser(Number(id))).then(({ payload }) => setUser(payload as User));
            }
        }, [id]);

        
        const onDeleteUser = (callback: Function) => {
            id && dispatch(deleteUser(id)).then(() => callback())
        }

        const onSubmit = (payload: User) => {
            dispatch(updateUser(payload))
        }


        return (
            <Component
                {...(props as P)}
                user={user}
                onDeleteUser={onDeleteUser}
                onSubmit={onSubmit}
            />
        )
    }


    return WithUser

}

