import Joi, { ObjectSchema } from "joi";

// Post operation schemas organized by request part
export const postSchemas = {
    // POST /allocations/new - Create new post
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

    // GET /allocations/:id - Get single post
    getAllocationByUser: {
        params: Joi.object({
        userID: Joi.string().required().messages({
                "any.required": "User ID is required",
                "string.empty": "User ID cannot be empty",
            }),
        })
    },

    // PUT /allocations - Update post
    update: {
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

    // DELETE /allocations/:id - Delete post
    delete: {
        params: Joi.object({
            allocation_id: Joi.string().required().messages({
                "any.required": "Post ID is required",
                "string.empty": "Post ID cannot be empty",
            }),
        }),
    },

    // GET /posts - List posts with filtering
    list: {
        query: Joi.object({
            page: Joi.number().integer().min(1).default(1),
            limit: Joi.number().integer().min(1).max(100).default(10),
            userId: Joi.string().optional(),
            sortBy: Joi.string()
                .valid("createdAt", "updatedAt")
                .default("createdAt"),
            sortOrder: Joi.string().valid("asc", "desc").default("desc"),
        }),
    },
};