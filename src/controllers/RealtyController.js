const RealtyRepository = require("../repository/RealtyRepository");
const serviceResponse = require("../service/dataApiResponse");

module.exports = class RealtyController {
  getAll(req, res) {
    console.log("req.query.type la", req.query.type);
    const page = req.query.page || 1;
    const limit = 100;
    const offset = page * limit - limit;
    const Realty = new RealtyRepository();
    Realty.countAll().then((count) => {
      if (req.query.type === undefined) {
        Realty.selectAll(offset, limit).then((records) => {
          res.status(200).json(serviceResponse(records, page, count, limit));
        });
      } else {
        Realty.selectByType(req.query.type, offset, limit).then((records) => {
          res.status(200).json(serviceResponse(records, page, count, limit));
        });
      }
    });
  }
  //     getAll(req, res) {
  //     const page = req.query.page || 1;
  //     const limit = 100;
  //     const offset = page * limit - limit;
  //     const Realty = new RealtyRepository();
  //     Realty.countAll().then((count) => {
  //       Realty.selectAll(req.query.type, offset, limit).then((records) => {
  //         res.status(200).json(serviceResponse(records, page, count, limit));
  //       });
  //     });
  //   }
};
