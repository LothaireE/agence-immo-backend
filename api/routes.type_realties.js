const express = require("express");
const router = express.Router();
const TypeRealtyController = require("../src/controllers/TypeRealtyController");

// Recupère toutes les realties
router.get("/", (req, res) => {
  new TypeRealtyController().getAll(req, res);
});
// Récupère une realty via son ID
router.get("/:id", (req, res) => {
  new TypeRealtyController().getOne(req, res);
});
// Création d'une realty
router.post("/", (req, res) => {
  new TypeRealtyController().createOne(req, res);
});
// Modification d'une realty via son ID
router.put("/:id", (req, res) => {
  new TypeRealtyController().updateOne(req, res);
});
// Suppression d'une realty via son ID
router.delete("/:id", (req, res) => {
  new TypeRealtyController().removeOne(req, res);
});

module.exports = router;
