import Joi from 'joi';

interface TypeSchema {
 createCompany: Joi.Schema<unknown>,
 updateCompany: Joi.Schema<unknown>,
 removeCompany: Joi.Schema<unknown>
}

const schema: TypeSchema = {
	createCompany: Joi.object().keys({
		fullName: Joi.string().trim().required(),
	}),
	updateCompany: Joi.object().keys({
		fullName: Joi.string().trim().required(),
	}),
	removeCompany: Joi.object().keys({
		query: Joi.object()
			.keys({
				companytId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
			})
			.required(),
	}),
};

export default schema;