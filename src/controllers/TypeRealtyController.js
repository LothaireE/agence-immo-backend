const TypeRealtyRepository = require("../repository/TypeRealtyRepository");
const serviceResponse = require("../service/dataApiResponse");

module.exports = class TypeRealtyController {
  // Les méthodes  solicitées par la route.type_realties
  getAll(req, res) {
    const page = req.query.page || 1;
    const limit = 100;
    const offset = page * limit - limit;
    const TypeRealty = new TypeRealtyRepository();
    TypeRealty.countAll().then((count) => {
      TypeRealty.selectAll(offset, limit).then((records) => {
        res.status(200).json(serviceResponse(records, page, count, limit));
      });
    });
  }
  getOne(req, res) {
    const TypeReality = new TypeRealtyRepository();
    TypeReality.getById(req.params.id).then((typeRealities) => {
      res.status(200).json(typeRealities);
    });
  }
  createOne(req, res) {
    const TypeReality = new TypeRealtyRepository();
    TypeReality.addRealty(req.body.name).then((typeRealities) => {
      res.status(200).json(typeRealities);
    });
  }
  updateOne(req, res) {
    let entity = {};
    //fields au plutiel car je me laisse la possibilité d'un ajout de detail
    let fields = ["name"];
    fields.forEach((field) => {
      if (req.body[field]) entity[field] = req.body[field];
    });
    const TypeReality = new TypeRealtyRepository();
    TypeReality.update(req.params.id, entity).then((records) => {
      res.status(200).json(serviceResponse(records));
    });
  }
  removeOne(req, res) {
    const TypeReality = new TypeRealtyRepository();
    TypeReality.delete(req.params.id).then((records) => {
      res.status(200).json(serviceResponse(records));
    });
  }
};
