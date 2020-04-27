const express = require("express");
const router = express.Router();
require("dotenv").config();
const { authenticated } = require("../middleware/auth");
const { signin } = require("../controllers/signin");

router.post("/signin", signin);

module.exports = router;