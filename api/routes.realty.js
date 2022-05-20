const express = require("express");
const router = express.Router();
const RealtyController = require("../src/controllers/RealtyController");

router.get("/", (req, res) => {
  new RealtyController().getAll(req, res);
});

module.exports = router;
