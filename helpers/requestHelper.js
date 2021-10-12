const Joi = require("joi");

function validateEmail(data) {
  const schema = Joi.object({
    email: Joi.string().min(3).required().email(),
  });

  return schema.validate(data);
}

//exports
module.exports = {
  validateEmail,
};
