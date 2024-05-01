import Joi from 'joi';

interface TypeSchema {
 createCompany: Joi.Schema<unknown>,
 updateCompany: Joi.Schema<unknown>,
 removeCompany: Joi.Schema<unknown>
}

const schema: TypeSchema = {
	createCompany: Joi.object().keys({
		body: Joi.object().keys({
			name: Joi.string().required(),
		}),
	}),

	updateCompany: Joi.object().keys({
		query: Joi.object().keys({
				companyId: Joi.string()
					.pattern(/^[0-9a-fA-F]{24}$/)
					.required(),
				name: Joi.string().optional(),
			}),
	}),

	removeCompany: Joi.object().keys({
		query: Joi.object().keys({
			companyId: Joi.string()
				.pattern(/^[0-9a-fA-F]{24}$/)
				.required(),
		}),
	}),
};

export default schema;