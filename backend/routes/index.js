const express = require("express");
const router = express.Router();
require("dotenv").config();
const { auth } = require("../middleware/auth");

const { signin } = require("../controllers/signin");
const { signup } = require("../controllers/signup");

router.post("/signin", signin);
router.post("/signup", signup);

const {
  consul: create,
  getconsul: getconsul
} = require("../controllers/consultation");
router.post("/consultation", auth, create);
router.get("/consultation/:id", auth, getconsul);

const { profile: get } = require("../controllers/profile");
router.get("/profile/:id", auth, get);

module.exports = router;
