'use strict'

const axios = require('axios');

const { apiBaseUrl, apiKey } = require('../config/apiConfig');

module.exports = {
    getAllBreaches: async (email) => {
        try {
            const truncateRes = false;
            const response = await axios({
                url: `${apiBaseUrl}/v3/breachedaccount/${email}?truncateResponse=${truncateRes}`,
                method: "get",
                headers: {
                    "hibp-api-key": apiKey
                }
            });

            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
