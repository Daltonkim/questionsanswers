import * as yup from "yup";

export const questionSchema = yup.object().shape({
    question: yup.string().required(),
    answer:yup.string().required(),
    hasDelay: yup.boolean()
})
