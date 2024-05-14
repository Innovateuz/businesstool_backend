import Joi from 'joi';

interface TypeSchema {
	createContact: Joi.Schema<any>;
	getContactById: Joi.Schema<any>;
	updateContact: Joi.Schema<any>;
	removeContact: Joi.Schema<any>;
}

const schema: TypeSchema = {
	createContact: Joi.object().keys({
		body: Joi.object()
			.keys({
				firstName: Joi.string().required(),
				lastName: Joi.string().required(),
				phoneNumber: Joi.string().required(),
				gender: Joi.string().required().allow('Male', 'Female'),
				avatarId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.optional(),
				email: Joi.string().optional(),
				birthDate: Joi.string().optional(),
				socialMedia: Joi.string().optional(),
			})
			.required(),
	}),

	getContactById: Joi.object().keys({
		query: Joi.object()
			.keys({
				contactId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
			})
			.required(),
	}),

	updateContact: Joi.object().keys({
		query: Joi.object()
			.keys({
				firstName: Joi.string().optional(),
				lastName: Joi.string().optional(),
				phoneNumber: Joi.string().optional(),
				gender: Joi.string().optional(),
				avatarId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.optional(),
				email: Joi.string().optional(),
				birthDate: Joi.string().optional(),
				socialMedia: Joi.string().optional(),
				contactId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
			})
			.required(),
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
