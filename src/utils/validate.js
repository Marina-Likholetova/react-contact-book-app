export default function validate(value, name) {
    let result;

    if (name === "phone") {
        const x = value
            .replace(/\D/g, "")
            .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

        if (!x[1]) {
            result = "+";
            return result;
        }

        if (!x[2]) {
            result = `+${x[1]}`;
            return result;
        }

        result =
            `+${x[1]} (${x[2]}` +
            (x[3] ? `) ${x[3]}` : "") +
            (x[4] ? `-${x[4]}` : "") +
            (x[5] ? `-${x[5]}` : "");
    } else {
        result = value.replace(/\d/g, "").trim();
    }

    return result;
}