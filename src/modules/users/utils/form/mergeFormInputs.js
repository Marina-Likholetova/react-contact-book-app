export default function mergeFormInputs(initialValue, payload) {
    return Object.keys(initialValue).reduce((acc, curr) => {
        if (curr in payload) {
            acc[curr] = payload[curr]
        }
        return acc
    }, {})
}