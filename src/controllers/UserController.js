const UserRepository = require("../repository/UserRepository");
const serviceResponse = require("../service/dataApiResponse");

module.exports = class UserController {
  getAll(req, res) {
    const page = req.query.page || 1;
    const limit = 100;
    const offset = page * limit - limit;
    const User = new UserRepository();
    //User.countAll().then((count) => {});
    User.selectAll(offset, limit).then((users) => {
      res.status(200).json(users);
    });
  }
  getOne(req, res) {
    const User = new UserRepository();
    User.getById(req.params.id).then((users) => {
      res.status(200).json(users);
    });
  }

  createOne(req, res) {
    console.log("celui ci", req.body);
    const User = new UserRepository();
    User.addUser(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    ).then((users) => {
      res.status(200).json(users);
    });
  }
  updateOne(req, res) {
    console.log("req.params.id", req.params.id);
    // entity est l'objet vide dans lequel je vais charger mes champs modifiés
    // c'est entity que je vais "push" dans ma table users
    let entity = {};
    // fields les colonnes concernées dans la table users
    let fields = ["firstname", "lastname", "email", "password"];
    fields.forEach((field) => {
      if (req.body[field]) entity[field] = req.body[field];
    });
    console.log("entity ici", entity);
    const User = new UserRepository();
    User.update(req.params.id, entity).then((records) => {
      res.status(200).json(serviceResponse(records));
    });
  }
  removeOne(req, res) {
    const User = new UserRepository();
    User.delete(req.params.id).then((records) => {
      res.status(200).json(serviceResponse(records));
    });
  }
};
