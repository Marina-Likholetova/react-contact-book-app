import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().required("Required").max(20).min(2),
    username: yup.string().required("Required").max(20).min(2),
    email: yup.string().email("Invalid email").required("Required"),
    phone: yup.string().required("Required").trim(),
    website: yup.string().nullable(),
});

export default validationSchema;