import React, { ComponentType } from 'react';
import { createUser } from "../slices/usersSlice";
import useAppDispatch from "modules/common/hooks/useDispatch";
import { UserForm } from "entities/user";

interface WithAddUserProps {
    onSubmit: (payload: UserForm) => void
} 

export default function withAddUser<P extends WithAddUserProps>(Component: ComponentType<P>) {
    const WithAddUser: React.FC<object> = (props) => {
        const dispatch = useAppDispatch();

        const onSubmit = (payload: UserForm) => {
            dispatch(createUser(payload))
        }
 
        return (
            <Component
                {...props as P}
                onSubmit={onSubmit}
            />
        )
    }
    
    return WithAddUser
}
