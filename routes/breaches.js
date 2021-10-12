"use strict";

const router = require("express").Router();

const Breaches = require("../controllers/breaches");

router.get("/:email", Breaches.getAllBreaches);

module.exports = router;
