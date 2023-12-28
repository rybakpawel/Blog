import Joi from "joi";

export const commentFormValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required().messages({
            "string.min": "Imię musi zawierać co najmniej 2 znaki.",
            "any.required": "Imię jest wymagane.",
        }),
        email: Joi.string().email().required().messages({
            "string.email": "Podany adres e-mail jest nieprawidłowy.",
            "any.required": "E-mail jest wymagany.",
        }),
        avatar: Joi.any(),
        content: Joi.string().min(3).required().messages({
            "string.min": "Wiadomość musi zawierać co najmniej 10 znaków.",
            "any.required": "Wiadomość jest wymagana.",
        }),
    }).options({ abortEarly: false });

    return schema.validate(data);
};
