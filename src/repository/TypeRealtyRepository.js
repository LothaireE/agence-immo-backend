const db = require("../../app/database_sql.js");

module.exports = class TypeRealtyRepository {
  // le detail des methodes en controller : requetes sql
  selectAll(offset = 0, limit = 100) {
    return db
      .promise()
      .query("SELECT * FROM types_realty LIMIT ?, ?", [offset, limit])
      .then((result) => result[0]);
  }
  countAll() {
    return db
      .promise()
      .query("SELECT COUNT(*) AS nb FROM types_realty")
      .then((result) => result[0][0].nb);
  }
  getById(id) {
    return db
      .promise()
      .query("SELECT * FROM types_realty WHERE id=?", [id])
      .then((result) => result[0]);
  }
  addRealty(name) {
    console.log("inside repository", name);
    return db
      .promise()
      .query("INSERT INTO `types_realty` (`name`) VALUES (?)", [name]);
  }
  update(id, entity) {
    console.log("entity", entity);
    return db
      .promise()
      .query("UPDATE `types_realty` SET ? WHERE `id`=?", [entity, id]);
  }
  delete(id) {
    return db.promise().query("DELETE FROM types_realty WHERE id=?", [id]);
  }
};
