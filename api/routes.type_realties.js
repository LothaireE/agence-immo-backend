const express = require("express");
const router = express.Router();
const TypeRealtyController = require("../src/controllers/TypeRealtyController");

router.get("/", (req, res) => {
  new TypeRealtyController().getAll(req, res);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id, "yes");
  new TypeRealtyController().getOne(req, res);
});

router.post("/", (req, res) => {
  console.log("===>", req.body);
  new TypeRealtyController().createOne(req, res);
});

router.put("/:id", (req, res) => {
  new TypeRealtyController().updateOne(req, res);
});

router.delete("/:id", (req, res) => {
  new TypeRealtyController().removeOne(req, res);
});

module.exports = router;
