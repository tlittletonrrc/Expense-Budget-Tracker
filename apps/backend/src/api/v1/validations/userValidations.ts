import Joi from "joi";


export const userSchemas = {
    // POST /user/new - Create new user
    createUser: {
        body: Joi.object({
            userID: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
            name: Joi.string().required().messages({
                "any.required": "name ID is required",
                "string.empty": "name ID cannot be empty",
            }),
            balance: Joi.number().required().messages({
                "any.required": "balance is required",
            }),
            savingsGoal: Joi.number().required().messages({
                "any.required": "savingsGoal is required",
            }),
        }),
    },

    // GET /user/:id - Get single user
    getUserByID: {
        params: Joi.object({
        id: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
        })
    },

    // PUT /user - Update user
    updateUser: {
        body: Joi.object({
            userID: Joi.string().required().messages({
                "any.required": "userID is required",
                "string.empty": "userID cannot be empty",
            }),
            name: Joi.string().required().messages({
                "any.required": "name ID is required",
                "string.empty": "name ID cannot be empty",
            }),
            balance: Joi.number().required().messages({
                "any.required": "balance is required",
            }),
            savingsGoal: Joi.number().required().messages({
                "any.required": "savingsGoal is required",
            }),
        }),
    },
};