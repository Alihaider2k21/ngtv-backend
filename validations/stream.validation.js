import Joi from "joi";

const id = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const add = {
  body: Joi.object().keys({
    episode_id: Joi.string().required(),
    user_id: Joi.string().required(),
    time: Joi.string().required(),
  }),
};

const update = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    time: Joi.string().required(),
  }),
};

export default {
  id,
  add,
  update,
};
