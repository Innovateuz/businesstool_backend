import Joi from "joi";

interface TypeSchema {
    createClient: Joi.Schema<any>,
    removeClient: Joi.Schema<any>
}

const schema: TypeSchema = {
    createClient: Joi.object().keys({
        name: Joi.string().required(),
        phoneNumber: Joi.string().optional(),
        avatarId: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .optional(),
        email: Joi.string().optional(),
    }),
    removeClient: Joi.object().keys({
        query: Joi.object()
            .keys({
                clientId: Joi.string()
                    .pattern(/^[0-9a-fA-F]{24}$/)
                    .required(),
            })
            .required(),
    }),
}

export default schema;
