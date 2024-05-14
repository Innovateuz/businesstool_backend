import Joi from 'joi';

interface TypeSchema {
	createCompany: Joi.Schema<unknown>;
	getCompanyById: Joi.Schema<unknown>;
	updateCompany: Joi.Schema<unknown>;
	removeCompany: Joi.Schema<unknown>;
}

const schema: TypeSchema = {
	createCompany: Joi.object().keys({
		body: Joi.object()
			.keys({
				name: Joi.string().required(),
			})
			.required(),
	}),

	getCompanyById: Joi.object().keys({
		query: Joi.object()
			.keys({
				companyId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
				name: Joi.string().optional(),
			})
			.required(),
	}),

	updateCompany: Joi.object().keys({
		query: Joi.object()
			.keys({
				companyId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
				name: Joi.string().optional(),
			})
			.required(),
	}),

	removeCompany: Joi.object().keys({
		query: Joi.object()
			.keys({
				companyId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
			})
			.required(),
	}),
};

export default schema;