import { User, UserForm, UserInput } from 'entities/user';


export default function mergeFormInputs(initialValue: UserForm, payload: User): UserForm {
   const arr: UserInput[] = Object.keys(initialValue) as UserInput[];

    const res: UserForm = arr.reduce((acc, curr) => {
        if (curr in payload) {
            Object.assign(acc, {[curr]: payload[curr]})
        }
        return acc
    }, {} as UserForm)

    return res;
}

