import Joi from "joi";


export const allocationSchemas = {
    // POST /allocations/new - Create new allocation
    createAllocation: {
        body: Joi.object({
            userID: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
            category: Joi.string().required().messages({
                "any.required": "Category is required",
                "string.empty": "Category cannot be empty",
            }),
            amount: Joi.number().required().messages({
                "any.required": "Amount is required",
            }),
            date: Joi.string().required().messages({
                "any.required": "Date is required",
                "string.empty": "Date cannot be empty",
            })
        }),
    },

    // GET /allocations/:id - Get single allocation
    getAllocationByUser: {
        params: Joi.object({
        id: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
        })
    },

    // PUT /allocations - Update allocation
    updateAllocation: {
        body: Joi.object({
            userID: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
            allocation_id: Joi.number().required().messages({
                "any.required": "Allocation ID is required",
            }),
            category: Joi.string().required().messages({
                "any.required": "Category is required",
                "string.empty": "Category cannot be empty",
            }),
            amount: Joi.number().required().messages({
                "any.required": "Amount is required",
            }),
            date: Joi.string().required().messages({
                "any.required": "Date is required",
                "string.empty": "Date cannot be empty",
            })
        }),
    },

    // DELETE /allocations/:id - Delete allocation
    deleteAllocation: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },
};