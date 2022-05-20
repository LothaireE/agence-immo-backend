const express = require("express");
const apiUsersRoutes = require("./routes.users.js");
const apiTypeRealtiesRoutes = require("./routes.type_realties.js");
const apiRealtyRoutes = require("./routes.realty.js");
const router = express.Router();
router.use(express.json());
// ... chargement de vos prochaines routes ici
router.use("/users", apiUsersRoutes);

//types de biens
router.use("/type_realties", apiTypeRealtiesRoutes);

//biens en question
router.use("/realty", apiRealtyRoutes);
// Si une route n'existe pas, erreur 404
router.route("*").all((req, res) => {
  res.status(404).send();
});
module.exports = router;
