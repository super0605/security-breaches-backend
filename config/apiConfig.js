"use strict";

require("dotenv").config();

const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.HIBP_API_KEY;

module.exports = {
  apiBaseUrl,
  apiKey,
};
