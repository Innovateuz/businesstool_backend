import Joi from "joi";

interface TypeSchema {
  getFile: Joi.Schema<any>;
}

const schema: TypeSchema = {
  getFile: Joi.object().keys({
    query: Joi.object()
      .keys({
        fileId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
      })
      .required(),
  }),
};

export default schema;
