const express = require("express");
const router = express.Router();
const UserController = require("../src/controllers/UserController");

router.get("/", (req, res) => {
  new UserController().getAll(req, res);
});

// Récupére 1 utilisateur via son ID
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  new UserController().getOne(req, res);
  // res.status(200).json({} /* Récupération de l'utilisateur en BDD */);
});

// Création d'un utilisateur
router.post("/", (req, res) => {
  // console.log("===>", req.body);
  new UserController().createOne(req, res);
  // res.status(200).json({ message: "creation" });
});

// Modification d'un utilisateur via son ID
router.put("/:id", (req, res) => {
  new UserController().updateOne(req, res);
  // res.status(200).json({});
});
// Suppression d'un utilisateur via son ID
router.delete("/:id", (req, res) => {
  console.log("route delete", req);
  new UserController().removeOne(req, res);
});

// Les autres méthodes sont donc non allouées
router.route("/").all((req, res) => {
  console.log("ici");

  res.status(405).send();
});
router.route("/:id").all((req, res) => {
  console.log("ici");

  res.status(405).send();
});

module.exports = router;
