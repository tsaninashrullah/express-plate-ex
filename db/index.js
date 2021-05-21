const db = require("./db");

/**
 * DB Query
 *
 * @param {String} queryText
 * @param {object} params
 * @returns {Promise} object
 */
function query(queryText, params) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    db
      .query(queryText, params, (err, res, fields) => {
        const duration = Date.now() - start;
        console.log(
          "executed query",
          {
            queryText,
            duration,
            rows: res.rowCount,
          },
          "with params",
          params
        );
        resolve(res.rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Acquire a client from pool
 *
 * @returns {object} client
 */
function getClient() {
  return db.connect();
}

module.exports = { getClient, query };