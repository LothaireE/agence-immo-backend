const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
app.use(cors());

//--------------------------------------------------------------------
//      Chargement des routes
//--------------------------------------------------------------------
const apiRoutes = require("./api/routes.js");
app.use("/api", apiRoutes);

//--------------------------------------------------------------------
//     Ecoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
  console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`);
});
