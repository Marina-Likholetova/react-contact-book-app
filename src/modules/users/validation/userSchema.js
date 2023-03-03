import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().required("Required").max(20).min(2).trim(),
    username: yup.string().required("Required").max(20).min(2).trim(),
    email: yup.string().email("Invalid email").required("Required").trim(),
    phone: yup
        .string()
        .required("Required")
        .trim()
        .matches(/(?=^(\(\d{3}\) \d{3}-\d{4}))/gm, "Invalid phone number"),
    website: yup.string().nullable(),
});

export default validationSchema;