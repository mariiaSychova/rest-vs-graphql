var mysql = require('mysql');

var connetion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "books"
});

connetion.connect((connectionError) => {
  if (connectionError) {
    console.log("Connection error!")
  } else {
    console.log("Connection success!");
  }
});

module.exports = connetion