const express = require("express");
const router = express.Router();
const UserController = require("../src/controllers/UserController");

// Récupère tous les utilisateurs
router.get("/", (req, res) => {
  new UserController().getAll(req, res);
});

// Récupére 1 utilisateur via son ID
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  new UserController().getOne(req, res);
});

// Création d'un utilisateur
router.post("/", (req, res) => {
  new UserController().createOne(req, res);
});

// Modification d'un utilisateur via son ID
router.put("/:id", (req, res) => {
  console.log("ce log la", req.body);
  new UserController().updateOne(req, res);
});
// Suppression d'un utilisateur via son ID
router.delete("/:id", (req, res) => {
  console.log("route delete", req);
  new UserController().removeOne(req, res);
});

// Les autres méthodes sont donc non allouées
router.route("/").all((req, res) => {
  res.status(405).send();
});
router.route("/:id").all((req, res) => {
  res.status(405).send();
});

module.exports = router;
