'use strict'

const BreachesService = require('../services/breaches');
const createError = require('http-errors');
const requestHelper = require("../helpers/requestHelper.js");

module.exports = {
    getAllBreaches: async (req, res, next) => {
        const email = req.params.email;
        const joiresulterror = requestHelper.validateEmail({ email }).error;
        if (!!joiresulterror)
            return res.status(400).send(joiresulterror.details[0].message);

        try {
            const response = await BreachesService.getAllBreaches(email);

            return res.status(200).json(response.data);
        }
        catch (error) {
            return next(createError(400, error))
        }
    }
}
