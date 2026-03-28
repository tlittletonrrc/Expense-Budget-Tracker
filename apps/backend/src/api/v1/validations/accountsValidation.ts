import Joi from "joi";

export const accountSchemas = {
    // POST /accounts/new - create or upsert account
    createAccount: {
        body: Joi.object({
            role: Joi.string().required().messages({
                "any.required": "Role is required",
                "string.empty": "Role cannot be empty",
            }),
            name: Joi.string().required().messages({
                "any.required": "Name is required",
                "string.empty": "Name cannot be empty",
            }),
            accountNumber: Joi.string().required().messages({
                "any.required": "Account number is required",
                "string.empty": "Account number cannot be empty",
            }),
            balance: Joi.number().required().messages({
                "any.required": "Balance is required",
            }),
        }),
    },

    // GET /accounts/:id - fetch accounts by userID
    getAccountsByUser: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
        }),
    },

    // PUT /accounts/:id - update account
    // updateAccount: {
    //     params: Joi.object({
    //         id: Joi.number().required().messages({
    //             "any.required": "Account ID is required",
    //         }),
    //     }),
    //     body: Joi.object({
    //         role: Joi.string().optional(),
    //         name: Joi.string().optional(),
    //         accountNumber: Joi.string().optional(),
    //         balance: Joi.number().optional(),
    //     }),
    // },

    // DELETE /accounts/:id - delete account
    deleteAccount: {
        params: Joi.object({
            id: Joi.number().required().messages({
                "any.required": "Account ID is required",
            }),
        }),
    },
};