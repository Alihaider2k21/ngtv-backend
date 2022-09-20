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
    image: Joi.string().required(),
    season_id: Joi.string().required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
  }),
};

export default {
  id,
  add,
  update,
};
