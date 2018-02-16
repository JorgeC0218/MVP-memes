var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'allDaMemes'
});

var selectAll = function(cb) {
  con.query('select * from allDaMemes', (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(name, url, cb) {
  con.query('insert into allDaMemes (name, url) values (?,?)', [name, url], (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;