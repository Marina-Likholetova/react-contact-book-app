import { useDispatch } from "react-redux"
import { createUser } from "../slices/usersSlice";


export default function withAddUser(Component) {
    const WithAddUser = (props) => {
        const dispatch = useDispatch();

        const onSubmit = (payload) => {
            dispatch(createUser(payload))
        }
 
        return (
            <Component
                onSubmit={onSubmit}
                {...props}
            />
        )
    }
    
    return WithAddUser
}
