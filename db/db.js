var mysql = require('mysql')
var connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:process.env.MYSQL_PASSWORD,
  database:'flo_db',
})

connection.connect(function(err) {
  if (err) {
    console.log(err);
    throw err;
  }
});
module.exports = connection
