const db = require("../../app/database_sql.js");

module.exports = class RealtyRepository {
  selectAll(offset = 0, limit = 100) {
    return db
      .promise()
      .query(
        "SELECT r.*, tr.name AS type FROM realties r JOIN types_realty tr ON tr.id=r.type LIMIT ?, ?",
        [offset, limit]
      )
      .then((result) => result[0]);
  }
  selectByType(type, offset = 0, limit = 100) {
    console.log(type);
    return db
      .promise()
      .query(
        "SELECT r.*, tr.name AS type FROM realties r JOIN types_realty tr ON tr.id=r.type WHERE type=? LIMIT ?, ?",
        [type, offset, limit]
      )
      .then((result) => result[0]);
  }
  countAll() {
    return db
      .promise()
      .query("SELECT COUNT(*) AS nb FROM realties")
      .then((result) => result[0][0].nb);
  }
};
