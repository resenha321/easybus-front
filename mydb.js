var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "easybus123",
  database: "mydb"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM empresa", function (err, result, _fields) {
    if (err) throw err;
    console.log(result);
  });
});