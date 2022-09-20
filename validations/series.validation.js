import Joi from "joi";

const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const add = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    trailer: Joi.string().required(),
    genre_id: Joi.string(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    trailer: Joi.string().required(),
  }),
};

export default {
  id,
  add,
  update,
};
