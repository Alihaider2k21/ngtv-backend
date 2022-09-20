import Joi from "joi";

const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const add = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  })
};

const update = {
  params: Joi.object().keys({
    id: Joi.object().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

export default {
  id,
  add,
  update,
};
