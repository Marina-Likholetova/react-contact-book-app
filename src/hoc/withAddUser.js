import { useDispatch } from "react-redux"
import { createUser } from "../store/slices/users/usersSlice";


export default function withAddUser(Component) {
    const WithAddUser = (props) => {
        const dispatch = useDispatch();

        const onAddUser = (payload) => {
            dispatch(createUser(payload))
        }
 
        return (
            <Component
                onAddUser={onAddUser}
                {...props}
            />
        )
    }
    
    return WithAddUser
}
