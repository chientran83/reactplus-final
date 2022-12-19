import * as yup from "yup"

export const RegisterSchema = yup.object({
    name: yup.string().min(2).max(16).required(),
    email: yup.string().email().required(),
    password: yup.string().min(2).max(16).required()
});