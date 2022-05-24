const db = require("../../app/database_sql.js");

module.exports = class UserRepository {
  // le detail des methodes en controller : requetes sql
  selectAll(offset = 0, limit = 100) {
    return db
      .promise()
      .query("SELECT * FROM users LIMIT ?, ?", [offset, limit])
      .then((result) => result[0]);
  }
  countAll() {
    return db
      .promise()
      .query("SELECT COUNT(*) AS nb FROM users")
      .then((result) => result[0][0].nb);
  }
  getById(id) {
    return db
      .promise()
      .query("SELECT * FROM users WHERE id=?", [id])
      .then((result) => result[0]);
  }
  addUser(firstname, lastname, email, password) {
    console.log("inside repository", firstname);
    console.log("inside repository", lastname);
    console.log("inside repository", email);
    console.log("inside repository", password);
    return db
      .promise()
      .query(
        "INSERT INTO `users`(`firstname`,`lastname`,`email`,`password`,`date`) VALUES (?,?,?,?,now())",
        [firstname, lastname, email, password]
      );
  }
  update(id, entity) {
    console.log("entity", entity);
    return db
      .promise()
      .query("UPDATE `users` SET ? WHERE `id`=?", [entity, id]);
  }
  delete(id) {
    return db.promise().query("DELETE FROM users WHERE id=?", [id]);
  }
};
