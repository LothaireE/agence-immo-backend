const RealtyRepository = require("../repository/RealtyRepository");
const serviceResponse = require("../service/dataApiResponse");

module.exports = class RealtyController {
  // La méthodes  solicitée par la route.realty

  getAll(req, res) {
    console.log("req.query", req.query);
    const page = req.query.page || 1;
    const limit = 12;
    const offset = page * limit - limit;
    const Realty = new RealtyRepository();
    // en fonction de la requete envoyé en front req.query.type
    // si type !== undefined je ne renvois que les emlement concernés par la requete (ex: maison uniquement)
    // si type === undefined je renvois toutes les tables (ex : maison , appartement, garage, etc)
    if (req.query.type === undefined) {
      Realty.countAll().then((count) => {
        Realty.selectAll(offset, limit).then((records) => {
          res.status(200).json(serviceResponse(records, page, count, limit));
        });
      });
    } else {
      Realty.countAll(req.query.type).then((count) => {
        Realty.selectByType(req.query.type, offset, limit).then((records) => {
          res.status(200).json(serviceResponse(records, page, count, limit));
        });
      });
    }
  }
};
