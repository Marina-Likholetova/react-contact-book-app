export default function mergeFormInputs (initialValue, payload) {
    return Object.values(initialValue).reduce((acc, curr) => {
        if (curr.name in payload) {
           acc[curr.name] = {...curr, value: payload[curr.name]}
        } else {
            acc[curr.name] = {...curr}
        }
        return acc;
    }, {})
}