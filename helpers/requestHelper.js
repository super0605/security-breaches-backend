const Joi = require("joi");

function validateEmail(data) {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  return schema.validate(data);
}

//exports
module.exports = {
  validateEmail,
};
