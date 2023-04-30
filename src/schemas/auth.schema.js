import joi from 'joi';

export const signUpSchema = joi.object({
    name: joi.string().min(7).required(),
    email: joi.string().email().required(),
    userName: joi.string().min(7).required(),
    password: joi.string().min(4).required(),
})

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})

 