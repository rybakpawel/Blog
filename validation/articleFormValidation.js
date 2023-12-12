import Joi from "joi";

export const articleFormValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(2).required().messages({
            "string.min": "Tytuł musi zawierać co najmniej 2 znaki.",
            "any.required": "Tytuł jest wymagany.",
        }),
        mainImage: Joi.any().required({
            "any.required": "Zdjęcie główne jest wymagane"
        }),
        content: Joi.string().min(30).required().messages({
            "string.email": "Treść musi zawierać co najmniej 30 znaków.",
            "any.required": "Treść jest wymagana.",
        }),
        authorId: Joi.string().length(24).required().messages({
            "string.length": "Identyfikator autora musi zawierać 24 znaki.",
            "any.required": "Identyfikator autora jest wymagany.",
        }),
        category: Joi.string().required().messages({
            "any.required": "Kategoria jest wymagana.",
        }),
    }).options({ abortEarly: false });

    return schema.validate(data);
};
