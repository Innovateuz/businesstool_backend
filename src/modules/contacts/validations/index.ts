import Joi from 'joi';

interface TypeSchema {
	createContact: Joi.Schema<unknown>;
	updateContact: Joi.Schema<unknown>;
	removeContact: Joi.Schema<unknown>;
}

const schema: TypeSchema = {
	createContact: Joi.object().keys({
		fullName: Joi.string().trim().required(),
		phoneNumber: Joi.string().trim().required(),
		avatarId: Joi.string()
			.pattern(/^[0-9a-fA-F]{24}$/)
			.optional(),
		email: Joi.string().trim().optional(),
		birthDate: Joi.string().optional(),
	}),
	updateContact: Joi.object().keys({
		fullName: Joi.string().trim().optional(),
		phoneNumber: Joi.string().trim().optional(),
		email: Joi.string().trim().optional(),
		birthDate: Joi.string().optional(),
	}),
	removeContact: Joi.object().keys({
		query: Joi.object()
			.keys({
				contactId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
			})
			.required(),
	}),
};

export default schema;
