import Joi from "joi";

interface TypeSchema {
    createUser: Joi.Schema<any>,
    removeUser: Joi.Schema<any>
}

const schema: TypeSchema = {
    createUser: Joi.object().keys({
        body: Joi.object()
            .keys({
                name: Joi.string().required(),
                phoneNumber: Joi.string().optional(),
                avatarId: Joi.string()
                    .pattern(/^[0-9a-fA-F]{24}$/)
                    .optional(),
                email: Joi.string().optional(),
            })
    }),
    removeUser: Joi.object().keys({
        query: Joi.object()
            .keys({
                userId: Joi.string()
                    .pattern(/^[0-9a-fA-F]{24}$/)
                    .required(),
            })
            .required(),
    }),
}

export default schema;
