// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ry0vho3omjhx25ovu",
  password: "j9xeawtwkpks096l",
  database: "bcuo8xpq4n48tijjl"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
